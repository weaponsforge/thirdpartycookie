## thirdpartycookie

> Checks if 3rd party cookies are allowed in client web browsers.  
> Inspired by @mindmup's [3rdpartycookiecheck](https://github.com/mindmup/3rdpartycookiecheck).


### Prerequisites

1. Secure web server that runs on https and can host static html files.
2. NodeJS *(optional, if static website is to be run on localhost)*
	- node version: 10.16.3
	- npm version: 6.9.0


### Content

- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Live Demo**](#demo)
- [**References**](#references)



## Installation

1. Clone this repository.  
`git clone https://github.com/weaponsforge/thirdpartycookie.git`

2. Install dependencies (For localhost viewing only. 3rd party cookies checking won't work from files served on localhost. However, the production app can be used from localhost. See [**Usage**]() for more information).   
`npm install`

3. Run the localhost server.  
`npm run start`

4. Load the local website client for more usage information.  
`http://localhost:3001`

5. (Optional) Upload `check.html` and `complete.html` in a secure web server that runs in https and call
"check.html" from there i.e., `https://[YOUR_SECURE_SERVER]/check.html`


## Usage

1. Create an `<iframe>`.
2. Point its `src` to `https://<your-secure-domain>/thirdpartycookie/check.html`. i.e.,   
`<iframe src="https://thirdpartycookie.firebaseapp.com/check.html">`
3. Listen for a window "message" event that will be issued using `window.postMessage()` from the iframe's child.  

		var receiveMessage = function(evt) {
		  if (evt && evt.origin === window.location.origin) {
		    if (evt.data === 'MM:3PCunsupported') {
		      console.log('--3RD PARTY COOKIES ARE N-O-T SUPPORTED!!')
		    } else if (evt.data === 'MM:3PCsupported') {
		      console.log('--3RD PARTY COOKIES ARE SUPPORTED')
		    }
		  }
		}

		window.addEventListener("message", receiveMessage, false)


## Live Demo


> **thirdpartycookie**:   
> [https://thirdpartycookie.firebaseapp.com/](https://thirdpartycookie.firebaseapp.com/).



## References

[[1]](https://stackoverflow.com/questions/3550790/check-if-third-party-cookies-are-enabled) - S.O. check if third party cookies are enabled  
[[2]](https://blog.zok.pw/web/2015/10/21/3rd-party-cookies-in-practice/) - 3rd party cookies in practice  
[[3]](https://javascript.info/cookie) - document.cookie


@weaponsforge  
20200313