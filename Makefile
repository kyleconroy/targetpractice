.PHONY: test clean

cfx := tools/addon-sdk/bin/cfx

targetpractice.xpi: tools firefox/data 
	cp js/*.js firefox/data/	
	$(cfx) xpi --pkgdir firefox

firefox/data: js/github.com.js
	cp js/*.js firefox/data/	

tools: tools/addon-sdk

tools/addon-sdk:
	mkdir -p tools
	curl -OL https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.tar.gz 
	tar -xf jetpack-sdk-latest.tar.gz
	mv addon-sdk-1.9 tools/addon-sdk
	rm -f jetpack-sdk-latest.tar.gz

test: firefox/data
	$(cfx) run --pkgdir firefox

clean:
	rm *.xpi
