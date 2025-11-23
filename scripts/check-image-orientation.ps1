$ErrorActionPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.Drawing

$plantasDir = Join-Path $PSScriptRoot "..\public\images\plantas"
$horizontales = @()

Get-ChildItem -Path $plantasDir -Recurse -Include *.jpg,*.jpeg,*.png,*.webp | ForEach-Object {
  try {
    $image = [System.Drawing.Image]::FromFile($_.FullName)
    $width = $image.Width
    $height = $image.Height
    
    # Verificar EXIF Orientation (PropertyID 0x0112)
    if ($image.PropertyIdList -contains 0x0112) {
      $orientation = $image.GetPropertyItem(0x0112).Value[0]
      # Orientaciones 5,6,7,8 intercambian width/height
      if ($orientation -ge 5 -and $orientation -le 8) {
        $temp = $width
        $width = $height
        $height = $temp
      }
    }
    
    $ratio = [math]::Round($width / $height, 2)
    if ($ratio -gt 1.1) {
      $horizontales += [PSCustomObject]@{
        PlantId = $_.Directory.Name
        ImageName = $_.Name
        Width = $width
        Height = $height
        Ratio = $ratio
      }
    }
    $image.Dispose()
  } catch {}
}

Write-Output "$($horizontales.Count) horizontales"
$horizontales | Sort-Object {[int]$_.PlantId} | ForEach-Object {
  Write-Output "ID $($_.PlantId): $($_.ImageName) ($($_.Ratio))"
}
