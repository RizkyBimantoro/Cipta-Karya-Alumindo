@echo off
cls
echo.
echo ========================================
echo   DEPLOY WEBSITE KE GITHUB
echo ========================================
echo.
echo Mengupload perubahan ke GitHub...
echo.

echo [Step 1/3] Menambahkan file...
git add index.html
if %errorlevel% neq 0 (
    echo ERROR: Git add failed!
    pause
    exit /b 1
)
echo ✓ File ditambahkan

echo.
echo [Step 2/3] Membuat commit...
git commit -m "Update Google Search Console verification"
if %errorlevel% neq 0 (
    echo ERROR: Git commit failed!
    pause
    exit /b 1
)
echo ✓ Commit berhasil

echo.
echo [Step 3/3] Push ke GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ERROR: Git push failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✓ DEPLOY BERHASIL!
echo ========================================
echo.
echo Website akan update dalam 2-3 menit.
echo Setelah itu, klik VERIFY di Google Search Console.
echo.
pause
