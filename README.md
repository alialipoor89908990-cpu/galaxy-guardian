> عکس/آیکون بازی در پوشه `icons/` و زبان رابط کاربری: **فارسی (RTL)**

# 🚀 نگهبان کهکشان — Galaxy Guardian

یک بازی کامل و مدرن از نوع **شوتر فضایی (Space Shooter)** ساخته‌شده با **HTML ،CSS و JavaScript خالص** — بدون هیچ فریم‌ورک و کتابخانه‌ای در هسته بازی. همین نسخه وب، مبنای ساخت نسخه‌های **Android/iOS (با Capacitor)** و **Windows/macOS/Linux (با Electron یا Tauri)** است.

## ✨ ویژگی‌ها

| بخش | توضیح |
|---|---|
| 🎮 گیم‌پلی | ۵ مرحله دست‌ساز + **حالت بی‌پایان**، باس در پایان هر مرحله، ۵ موج دشمن |
| 👾 دشمن‌ها | مهاجم، زنبورک سینوسی، تیرانداز هدف‌گیر، زره‌پوش و ۳ الگوی حمله باس |
| 🔥 سختی | افزایش تدریجی جان/سرعت/آهنگ شلیک دشمن‌ها در هر مرحله + ۳ درجه سختی |
| 🎁 آیتم‌ها | سپر، شلیک سریع، تیر سه‌گانه، جان اضافه، بمب ویرانگر |
| 🏆 امتیاز | کمبو تا ×۵، رکورد جداگانه برای هر سختی (localStorage) |
| 🔊 صدا | موتور صدای سینتی با Web Audio API — **بدون هیچ فایل صوتی** (موسیقی + ۱۴ افکت) |
| 📱 کنترل | لمس/درگ (موبایل) + کیبورد WASD/جهت‌نما + ماوس (دسکتاپ) |
| 🌐 PWA | نصب روی گوشی/دسکتاپ + اجرای کامل **آفلاین** (Service Worker) |
| 📐 واکنش‌گرا | موبایل، تبلت، لپ‌تاپ و مانیتور بزرگ + پشتیبانی Notch/Safe-Area |
| 🎬 جلوه‌ها | ذرات انفجار، ستاره‌های پارالاکس، لرزش صفحه، فلاش، متن‌های شناور |

---

## 📁 ساختار پوشه‌ها

```
galaxy-guardian/
├── index.html              ← تک‌صفحه اصلی؛ همه «صفحه‌ها» (منو، تنظیمات و...) داخل آن است
├── manifest.json           ← هویت PWA (نام، آیکون، رنگ) برای نصب روی گوشی
├── sw.js                   ← Service Worker؛ اجرای آفلاین
├── server.js               ← سرور استاتیک کوچک برای اجرای محلی (اختیاری؛ node server.js)
├── capacitor.config.json   ← تنظیمات Capacitor برای خروجی Android/iOS
├── package.json            ← وابستگی‌های «فقط ابزار بسته‌بندی» + اسکریپت‌ها
│
├── css/
│   └── style.css           ← تمام استایل‌ها (تم نئون فضایی، RTL، ریسپانسیو، انیمیشن‌ها)
│
├── js/                     ← کد بازی (هر فایل یک مسئولیت؛ به‌ترتیب در index.html لود می‌شوند)
│   ├── config.js           ← تمام تنظیمات و بالانس بازی (سرعت، جان، رنگ، سختی و...)
│   ├── utils.js            ← توابع کمکی (اعداد فارسی، برخورد دایره‌ای، clamp و...)
│   ├── storage.js          ← ذخیره امن تنظیمات و رکوردها در localStorage
│   ├── audio.js            ← موتور صدا: سنتز افکت‌ها + موسیقی لوپ (Web Audio)
│   ├── input.js            ← ورودی یکپارچه: کیبورد + ماوس + لمس (Pointer Events)
│   ├── starfield.js        ← پس‌زمینه ستاره‌های ۳ لایه پارالاکس
│   ├── particles.js        ← سیستم ذرات (انفجار، دود موتور، متن شناور)
│   ├── bullet.js           ← گلوله بازیکن/دشمن
│   ├── powerup.js          ← آیتم‌های قدرتی با آیکون وکتوری + انتخاب وزنی
│   ├── enemy.js            ← ۴ نوع دشمن با رفتار مستقل + نوار جان
│   ├── boss.js             ← باس: ورود، گشت‌زنی، ۳ الگوی حمله، فاز خشم
│   ├── player.js           ← سفینه بازیکن: حرکت، شلیک، توانایی‌ها، آسیب
│   ├── levels.js           ← طراحی ۵ مرحله (موج‌ها) + تولیدمراحل بی‌پایان
│   ├── game.js             ← هسته: ماشین حالت، موج‌ها، برخوردها، امتیاز، کمبو، رسم
│   ├── ui.js               ← اتصال صفحه‌ها/دکمه‌ها/HUD به بازی
│   └── main.js             ← نقطه شروع: بوم، حلقه rAF، ریسایز، ثبت SW
│
├── icons/                  ← آیکون‌های PWA و اپلیکیشن (تولیدشده با scripts/make_icons.py)
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── icon-maskable-512.png
│   └── favicon-64.png
│
├── electron/
│   └── main.js             ← فرآیند اصلی Electron (پنجره دسکتاپ)
│
└── scripts/
    └── copy-web.js         ← کپی فایل‌های وب به www/ برای Capacitor
```

> **نکته معماری:** چون از `<script>` معمولی (نه ES Module) استفاده شده، بازی حتی با **دابل‌کلیک روی index.html** (پروتکل file://) هم اجرا می‌شود. فضای نام سراسری `GG` از تداخل نام‌ها جلوگیری می‌کند.

---

## ▶️ اجرای نسخه وب (۲ روش)

### روش ۱ — بدون هیچ نصبی (ساده‌ترین)
فایل `index.html` را در مرورگر (Chrome/Edge/Firefox) باز کنید. تمام!

### روش ۲ — با سرور محلی (پیشنهادی برای PWA و توسعه)
یکی از این گزینه‌ها:

```bash
# گزینه الف: با Node (بدون نصب هیچ پکیجی — server.js ضمیمه است)
node server.js            # → http://localhost:3000

# گزینه ب: با پایتون
python -m http.server 3000

# گزینه ج: با پکیج serve
npx serve .
```

سپس در مرورگر `http://localhost:3000` را باز کنید.
برای شبیه‌سازی موبایل: در Chrome کلید `F12` → آیکون موبایل (Device Toolbar).

### نصب به‌عنوان اپ PWA (روی گوشی یا دسکتاپ)
1. بازی را با روش ۲ (سرور) اجرا کنید؛ دقت کنید صفحه روی `localhost` یا `https` باشد.
2. در Chrome موبایل: منو ⋮ → **Add to Home screen**.
3. در Chrome دسکتاپ: آیکون نصب در نوار آدرس → **Install**.
4. بعد از نصب، بازی **کاملاً آفلاین** هم اجرا می‌شود.

---

## 🤖 تبدیل به APK اندروید (با Capacitor)

### ابزارهای موردنیاز (نام دقیق):
| ابزار | نسخه پیشنهادی | از کجا |
|---|---|---|
| Node.js + npm | 18 یا جدیدتر | nodejs.org |
| JDK | **17** (LTS) | adoptium.net |
| Android Studio | Iguana یا جدیدتر | developer.android.com/studio |
| SDK اندروید | API 34 + Build-Tools 34 | از داخل Android Studio → SDK Manager |
| Capacitor | 6.x (در package.json هست) | با npm نصب می‌شود |

### مرحله‌به‌مرحله:
```bash
# ۱) نصب وابستگی‌های Capacitor (از داخل پوشه galaxy-guardian)
npm install

# ۲) کپی فایل‌های وب به پوشه www/ و افزودن پلتفرم اندروید
npm run copy:web
npx cap add android

# ۳) همگام‌سازی (هر بار کد وب را عوض کردید دوباره اجرا کنید)
npx cap sync android

# ۴) باز کردن پروژه در Android Studio و ساخت APK
npx cap open android
```
در Android Studio:
- منوی **Build → Build Bundle(s)/APK(s) → Build APK(s)**
- خروجی: `android/app/build/outputs/apk/debug/app-debug.apk`
- برای نسخه Google Play: **Build → Generate Signed Bundle/APK** (نیاز به ساخت keystore دارد)

ساخت خط فرمانی (بدون باز کردن GUI):
```bash
cd android
./gradlew assembleDebug        # APK دیباگ
./gradlew assembleRelease      # APK ریلیز (نیاز به امضا)
```

> قبل از ساخت، `appId` را در `capacitor.config.json` به دامنه دلخواه خودتان تغییر دهید (مثلاً `com.myname.galaxyguardian`).

### 🍎 iOS (نیاز به مک)
```bash
npm run copy:web
npx cap add ios
npx cap sync ios
npx cap open ios     # باز شدن در Xcode
```
سپس در Xcode: **Product → Destination: دستگاه/شبیه‌ساز → Run**.
برای انتشار در App Store به حساب **Apple Developer** (۹۹ دلار/سال) نیاز دارید.

---

## 💻 ساخت نسخه دسکتاپ (Windows / macOS / Linux)

### روش ۱ — Electron (ساده‌تر)
```bash
npm install             # electron و electron-builder نصب می‌شوند

# اجرا برای تست
npm run electron:start

# ساخت خروجی نهایی برای سیستم‌عامل جاری
npm run electron:build
```
خروجی‌ها در پوشه `dist-desktop/`:
- ویندوز: نصاب `Galaxy Guardian Setup <version>.exe` (NSIS)
- مک: `Galaxy Guardian-<version>.dmg`
- لینوکس: `galaxy-guardian_<version>_amd64.AppImage`

> نکته: ساخت خروجی mac (dmg) فقط روی سیستم macOS انجام می‌شود؛ برای ساخت هر سه‌تایی هم‌زمان از GitHub Actions یا سرویس electron-builder cloud استفاده کنید.

### روش ۲ — Tauri (خروجی بسیار سبک‌تر، ~۵ مگابایت)
ابزارهای موردنیاز: **Rust** (rustup.rs) + **WebView2** (در ویندوز ۱۰/۱۱ معمولاً هست) + ابزار بیلد C++ در ویندوز (Visual Studio Build Tools) و Xcode CLT در مک.

```bash
npm install -D @tauri-apps/cli
npx tauri init
# در سوال‌ها:
#   dev server:  http://localhost:3000
#   build dir:   ../www        (اول npm run copy:web را اجرا کنید)

npx tauri build       # خروجی exe/msi در src-tauri/target/release
```

---

## 🛠 توسعه و افزودن قابلیت

بازی عمداً «داده‌محور» نوشته شده تا توسعه‌اش ساده باشد:

- **دشمن جدید:** در `js/config.js` بخش `ENEMIES` یک کلید جدید اضافه کنید (ابعاد/جان/سرعت/امتیاز) و رسم آن را در `js/enemy.js` متد `draw` اضافه کنید؛ سپس در `js/levels.js` به موج‌ها اضافه‌اش کنید.
- **مرحله جدید:** در `js/levels.js` یک شیء به آرایه `GG.LEVELS` اضافه کنید (نام + لیست موج‌ها). حالت بی‌پایان خودکار از مرحله ششم شروع می‌شود.
- **آیتم قدرتی جدید:** یک نوع در `js/powerup.js` (رنگ/برچسب/آیکون) + اثرش در `player.applyPowerUp` + وزن رها شدن در `config.js → POWERUPS.weights`.
- **بالانس:** تقریباً همه اعداد در `js/config.js` جمع شده‌اند.
- **دیباگ:** در کنسول مرورگر، شیء `GG_GAME` در دسترس است (مثلاً `GG_GAME.player.hp = 5`).

### قدم‌های پیشنهادی بعدی (برای نسخه‌های آینده)
- صداگذاری با فایل‌های mp3 و موسیقی متنوع برای هر مرحله
- جدول رکوردهای آنلاین (نیاز به بک‌اند)
- فروشگاه ارتقای سفینه با امتیازها
- حالت دو‌نفره روی یک صفحه

## ❓ عیب‌یابی سریع

| مشکل | راه‌حل |
|---|---|
| صدا پخش نمی‌شود | مرورگرها تا اولین کلیک صدا را قفل می‌کنند؛ یک بار روی صفحه کلیک/لمس کنید |
| آیکون نصب PWA دیده نمی‌شود | صفحه باید روی `localhost` یا `https` باز شود (نه file://) |
| تغییرات کد در PWA اعمال نمی‌شود | یک بار DevTools → Application → Service Workers → Unregister |
| خطای gradle در اندروید | JDK باید دقیقاً 17 باشد؛ `java -version` را چک کنید |
| خروجی mac روی ویندوز ساخته نمی‌شود | طبیعی است؛ ساخت dmg فقط روی macOS ممکن است |
