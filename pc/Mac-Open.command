#!/bin/bash
# محطة الطاقة الحيّة — تشغيل على ماك (بملء الشاشة). للخروج: Cmd+Q
cd "$(dirname "$0")/../app" || exit 1
URL="file://$PWD/index.html"
for APP in "Google Chrome" "Microsoft Edge" "Brave Browser" "Chromium"; do
  if [ -d "/Applications/$APP.app" ]; then
    open -na "$APP" --args --app="$URL" --start-fullscreen
    exit 0
  fi
done
# لا يوجد متصفح كروميوم: نفتح المتصفح الافتراضي ثم اضغط F أو انقر للملء الشاشة
open "$URL"
