### Nova Browser Link
A browser companion extension for Laravel Nova.
Provides a easy way to navigate to Nova resources

<img width="100%" alt="Screen Shot 2019-07-04 at 5 00 10 PM" src="https://user-images.githubusercontent.com/29180903/60687600-83bfda80-9e7d-11e9-8e3f-5ad29723cffd.png">

### Example usecase
When viewing your blog and want quickly edit it.

### How it works
The browser extension looks for a meta tag:
```html
<meta name="nova" content="resource=users, id=1">
```
When it does, the Nova icon will highlight
When clicked, it will bring you to a Nova detail page.
