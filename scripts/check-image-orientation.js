const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const plantasDir = path.join(__dirname, '..', 'public', 'images', 'plantas');

// Script PowerShell que analiza todas las imágenes respetando EXIF orientation
const psScriptPath = path.join(__dirname, 'check-orientation.ps1');
const psScript = `
\$ErrorActionPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.Drawing
Get-ChildItem -Path '${plantasDir.replace(/\\/g, '\\\\')}' -Recurse -Include *.jpg,*.jpeg,*.png,*.webp | ForEach-Object {
  try {
    \$img = [System.Drawing.Image]::FromFile(\$_.FullName)
    \$width = \$img.Width
    \$height = \$img.Height
    
    if (\$img.PropertyIdList -contains 0x0112) {
      \$orientation = \$img.GetPropertyItem(0x0112).Value[0]
      if (\$orientation -ge 5 -and \$orientation -le 8) {
        \$temp = \$width
        \$width = \$height
        \$height = \$temp
      }
    }
    
    \$ratio = [math]::Round(\$width / \$height, 2)
    if (\$ratio -gt 1.1) {
      Write-Output "\$(\$_.Directory.Name)|\$(\$_.Name)|\$width|\$height|\$ratio"
    }
    \$img.Dispose()
  } catch {}
}
`;

fs.writeFileSync(psScriptPath, psScript, 'utf-8');

try {
  const output = execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${psScriptPath}"`, { encoding: 'utf-8' });
  
  if (!output.trim()) {
    console.log('📐 0 horizontales');
    process.exit(0);
  }

  const lines = output.trim().split('\n').filter(line => line.includes('|'));
  console.log(`📐 ${lines.length} horizontales`);
  
  lines.forEach(line => {
    const [plantId, imageName, width, height, ratio] = line.split('|');
    console.log(`ID ${plantId}: ${imageName} (${ratio})`);
  });
} catch (error) {
  console.log('❌ Error:', error.message);
  process.exit(1);
} finally {
  // Limpiar archivo temporal
  if (fs.existsSync(psScriptPath)) {
    fs.unlinkSync(psScriptPath);
  }
}
