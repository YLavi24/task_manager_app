@echo off
echo Starting Task Manager Application...
echo.
echo Make sure MongoDB is running before proceeding!
echo.
pause
echo.
echo Installing dependencies...
call npm run install-deps
echo.
echo Starting the application...
echo Frontend will be available at: http://localhost:3000
echo Backend API will be available at: http://localhost:5000
echo.
call npm run dev