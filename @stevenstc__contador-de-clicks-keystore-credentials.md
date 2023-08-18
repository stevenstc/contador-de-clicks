# Android Keystore Credentials

These credentials are used in conjunction with your Android keystore file to sign your app for distribution. 

## firmar la aplicacion 

### firmar .apk 

zipalign -f -v 4 app-debug-signed.apk android-1.2.3.apk

apksigner sign --ks clicks-keystore.bak.jks --ks-key-alias a9f948261f4781fb733091c7dd5e4ab8 android-1.2.3.apk

### firmar .aab in CMD
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore clicks-keystore.bak.jks app-release.aab a9f948261f4781fb733091c7dd5e4ab8

## Credential Values

- Android key alias: a9f948261f4781fb733091c7dd5e4ab8

- Android Passphrase for keystore: 57c9f1ddc3b52e42eac3918d68f52aad

- Android key password: b5ae66c61c58fb041dbb5d78954f6a55
      
