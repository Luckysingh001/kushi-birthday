# Kushi's Birthday Surprise

A four-page birthday website: welcome, wish, photo gallery, and confetti finale.

## Add her photos permanently (for GitHub Pages)

1. Open the `photos` folder.
2. Add six of Kushi's photos and name them exactly: `kushi-1.jpg`, `kushi-2.jpg`, `kushi-3.jpg`, `kushi-4.jpg`, `kushi-5.jpg`, and `kushi-6.jpg`.
3. Keep the file names lowercase and use `.jpg` format. Any photo shape works because the gallery crops it neatly.

The photo-upload button on `memories.html` is still useful for a quick private preview, but those temporary uploads are stored only in that browser. The `photos` folder is the version everyone will see after GitHub deployment.

## Run locally

No installation is required if the Windows Python Launcher is available. From this folder run:

```powershell
py -m http.server 4173
```

Then open `http://localhost:4173`.

## Share it online with GitHub Pages

1. Create a new GitHub repository, for example `kushi-birthday`.
2. Upload everything *inside* this folder, including `index.html`, `styles.css`, `app.js`, the other HTML pages, and the `photos` folder.
3. In the repository, open **Settings** → **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose `main` and `/(root)`, then click **Save**.
5. GitHub will show the public website URL after it finishes publishing. It may take a few minutes.

The site will be public to anyone with its link. Do not upload private photos unless Kushi is happy for anyone with the link to see them.
