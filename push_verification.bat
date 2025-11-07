@echo off
echo ========================================
echo  Push Google Verification ke GitHub
echo ========================================
echo.

echo [1/3] Adding changes...
git add index.html

echo [2/3] Committing...
git commit -m "Update Google Search Console verification code"

echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo  DONE! Website will update in 2-3 minutes
echo ========================================
echo.
pause
