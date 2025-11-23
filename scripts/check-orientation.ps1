
$ErrorActionPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.Drawing
Get-ChildItem -Path 'C:\\Users\\totob\\Documents\\VSCodes\\AppMDZ\\public\\images\\plantas' -Recurse -Include *.jpg,*.jpeg,*.png,*.webp | ForEach-Object {
  try {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    $width = $img.Width
    $height = $img.Height
    
    if ($img.PropertyIdList -contains 0x0112) {
      $orientation = $img.GetPropertyItem(0x0112).Value[0]
      if ($orientation -ge 5 -and $orientation -le 8) {
        $temp = $width
        $width = $height
        $height = $temp
      }
    }
    
    $ratio = [math]::Round($width / $height, 2)
    if ($ratio -gt 1.1) {
      Write-Output "$($_.Directory.Name)|$($_.Name)|$width|$height|$ratio"
    }
    $img.Dispose()
  } catch {}
}
