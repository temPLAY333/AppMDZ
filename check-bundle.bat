@echo off
echo Verificando bundle de React Native...
call npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output NUL
if %errorlevel% neq 0 (
  echo Error: Hay problemas en la compilacion del bundle.
  pause
  exit /b 1
)
echo Verificacion del bundle completada con exito!
pause