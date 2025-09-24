@echo off
echo Configurando el SDK de Android temporalmente...
echo.

set /p sdk_path=Por favor, introduce la ruta de tu SDK de Android (por ejemplo, C:\Users\totob\AppData\Local\Android\Sdk): 

set ANDROID_HOME=%sdk_path%
echo SDK path configurado en: %ANDROID_HOME%
echo.

echo Iniciando Expo...
call npx expo start --android

pause