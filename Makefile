.PHONY: test

cfx := tools/addon-sdk/bin/cfx

targetpractice.xpi: tools js/github.com.js
	cp js/*.js firefox/data/	
	$(cfx) xpi --pkgdir firefox

test:
	$(cfx) run --pkgdir firefox

tools: tools/addon-sdk

tools/addon-sdk:
	mkdir -p tools
	curl -OL https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.tar.gz 
	tar -xf jetpack-sdk-latest.tar.gz
	mv addon-sdk-1.9 tools/addon-sdk
	rm -f jetpack-sdk-latest.tar.gz
