#!/bin/bash
# Instalar una versión específica del NDK
yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "ndk;21.4.7075529" "cmake;3.22.1"