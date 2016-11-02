#Questions

### What are possible issues with this new file structure?
- if you have multiple controllers, directives, services or filters it might get convoluted to find the actual file you are looking for.

### When thinking about extending the single responsibility principle to the app structure, what are some other ways that the app could be structured?
- either by type of files or by names of features

### What are the differences between serving files from an http server and from the file system? It seemed to work fine with just open index.html in the browser...
- in the http server emulates a real life server that would be restricted if it was just served up from the file system. Basically it protects the computer from serving up harmful files from the browser

### Reflecting on the new structure and thinking back to lesson 1 - is Angular an MVC framework? How does the app structure support/disprove that?
- I think it still supports that as we have all of the views/models/controllers separated out for the most part. Some models can potentially be stored in the controllers.
