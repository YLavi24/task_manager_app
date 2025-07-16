# הוראות פריסה לאינטרנט

## אפשרות 1: Vercel (Frontend) + Railway (Backend) - מומלץ

### שלב 1: פריסת השרת ב-Railway

1. היכנס ל-[Railway.app](https://railway.app)
2. התחבר עם GitHub
3. לחץ על "New Project" → "Deploy from GitHub repo"
4. בחר את הריפוזיטורי שלך
5. בחר את התיקייה `server`
6. הוסף את משתני הסביבה הבאים:
   ```
   PORT=5000
   JWT_SECRET=your_jwt_secret_key_here_change_in_production_2024_task_manager_app
   NODE_ENV=production
   ```
7. Railway יתן לך URL של השרת (משהו כמו: https://your-app.railway.app)

### שלב 2: פריסת הקליינט ב-Vercel

1. היכנס ל-[Vercel.com](https://vercel.com)
2. התחבר עם GitHub
3. לחץ על "New Project"
4. בחר את הריפוזיטורי שלך
5. הגדר את הפרויקט:
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. הוסף משתנה סביבה:
   ```
   REACT_APP_API_URL=https://your-railway-app-url.railway.app
   ```
   (החלף את הURL בזה שקיבלת מ-Railway)
7. לחץ Deploy

## אפשרות 2: Netlify (Frontend) + Render (Backend)

### שלב 1: פריסת השרת ב-Render

1. היכנס ל-[Render.com](https://render.com)
2. התחבר עם GitHub
3. לחץ על "New" → "Web Service"
4. בחר את הריפוזיטורי שלך
5. הגדרות:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. הוסף משתני סביבה כמו ב-Railway

### שלב 2: פריסת הקליינט ב-Netlify

1. היכנס ל-[Netlify.com](https://netlify.com)
2. התחבר עם GitHub
3. לחץ על "New site from Git"
4. בחר את הריפוזיטורי שלך
5. הגדרות:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/build`
6. הוסף משתנה סביבה:
   ```
   REACT_APP_API_URL=https://your-render-app-url.onrender.com
   ```

## אפשרות 3: Heroku (הכל במקום אחד)

1. צור קובץ `Procfile` בשורש הפרויקט:
   ```
   web: cd server && npm start
   ```
2. עדכן את `package.json` בשורש:
   ```json
   {
     "scripts": {
       "heroku-postbuild": "cd client && npm install && npm run build"
     }
   }
   ```
3. עדכן את השרת לשרת גם את הקליינט
4. פרוס ל-Heroku

## בדיקה לפני פריסה

הרץ את הפקודות הבאות כדי לוודא שהכל עובד:

```bash
# בדיקת השרת
cd server
npm install
npm start

# בדיקת הקליינט (בטרמינל נפרד)
cd client
npm install
npm start
```

## טיפים חשובים
   MONGODB_URI=mongodb+srv://taskmanager:taskmanager123@lavi1.o0milfd.mongodb.net/?retryWrites=true&w=majority&appName=Lavi1

1. **אבטחה**: שנה את JWT_SECRET לערך חזק ויחודי
2. **CORS**: וודא שהשרת מאפשר בקשות מהדומיין של הקליינט
3. **HTTPS**: השתמש ב-HTTPS בפרודקשן
4. **משתני סביבה**: אל תשתף את קובץ ה-.env בגיט

## פתרון בעיות נפוצות

- אם יש שגיאת CORS, בדוק את הגדרות ה-CORS בשרת
- אם הקליינט לא מתחבר לשרת, בדוק את REACT_APP_API_URL
- אם יש בעיות עם MongoDB, בדוק את מחרוזת החיבור
