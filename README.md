# Image-Processing-API

Image Processing API Project For FWD Nanodegree By : Mohamed Said

# Important Production Scripts

```
npm run build
npm run start
```

# Important Production Scripts

```
1. npm run test
2. npm run dev
3. npm run clean
4. npm run format
5. npm run lint
```

# Steps To Make it Work !

1. Download Node.js From https://nodejs.org/en/download
2. run `npm run build` it automatically will run convert from typescript to js File then run `node build/.` which will start the server at http://localhost:3500
3. To Run Test You Can use `npm run test`
4. When server Start root domain will shown UI to select proper image and you able to adjust with and hight with minimum 100px for both of them
5. Click on Button under each image to redirect to imageProcess API it self with Selected Image and with & Hight
6. system will automatic Check if the image already exist will return it from filesystem
7. if image not found system will process the image and return it back

# How To Add New Images !

1. Upload New Image to `./public/images/full` Then Add The HTML Section To `./public/html/index.html`
   as this example below

```html
<div class="col-md-4 mb-2">
  <div class="card">
    <img src="images/full/ChangeItWithImageName" class="card-img-top" />
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Width</span>
            <input type="number" id="flagWidth" class="form-control" value="1920" />
          </div>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Hight</span>
            <input type="number" id="flagHight" class="form-control" value="1080" />
          </div>
        </div>
        <div class="col-12">
          <button
            type="button"
            onclick="MakeUrl('ChangeItWithImageName','flagWidth','flagHight')"
            class="btn btn-danger w-100"
          >
            Resize This Image
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

2. it will shown in Root Domain and available to Resize ^^
