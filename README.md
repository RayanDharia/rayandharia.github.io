# Rayan Dharia Blog

A manually maintained static HTML blog for GitHub Pages.

## File structure

```text
CNAME
index.html
styles.css
main.js
posts/
  welcome.html
  post-template.html
```

## Publish this version

1. Back up the existing repository.
2. Copy all files and the `posts` folder into the repository root.
3. Remove or rename any old file called `#styles.css`.
4. Commit and push the changes to the branch used by GitHub Pages.
5. Keep `CNAME` in the repository root so the custom domain remains configured.

## Add a new post

1. Duplicate `posts/post-template.html`.
2. Rename it using a short URL-friendly name, such as:
   `posts/my-project-update.html`
3. Edit:
   - the `<title>`
   - meta description
   - displayed date and `datetime`
   - reading time
   - heading
   - description
   - article body
4. Open `index.html`.
5. Duplicate the existing `<article class="post-card">...</article>` block.
6. Change its date, title, summary, and both links.
7. Put the newest post at the top of `.post-list`.
8. Commit and push.

## Add an image to a post

Create an `images` folder in the repository root:

```text
images/
  project-photo.jpg
```

From a post inside the `posts` folder, reference it like this:

```html
<img
  src="../images/project-photo.jpg"
  alt="Describe what is visible in the image"
>
```

## Important path rule

Pages in the repository root use:

```html
<link rel="stylesheet" href="styles.css">
<script src="main.js" defer></script>
```

Pages inside `posts/` use:

```html
<link rel="stylesheet" href="../styles.css">
<script src="../main.js" defer></script>
```
