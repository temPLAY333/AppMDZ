@echo off
echo Verificando errores de TypeScript...
call npx tsc --noEmit
if %errorlevel% neq 0 (
  echo Error: Hay problemas de TypeScript en tu codigo.
  pause
  exit /b 1
)
echo Verificacion de TypeScript completada con exito!
pause