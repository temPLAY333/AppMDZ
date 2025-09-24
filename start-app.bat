@echo off
echo Iniciando la aplicación Expo...
echo.
echo Asegúrate de que:
echo 1. Los paquetes hayan sido actualizados (ejecuta update-packages.bat primero si no lo has hecho)
echo 2. El emulador de Android esté en ejecución o tengas un dispositivo conectado
echo.

call npx expo start --android

echo.
echo Presiona cualquier tecla para cerrar.
pause > nul