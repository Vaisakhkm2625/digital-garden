---
{"dg-publish":true,"permalink":"/fleeting-notes/consolidated-pdf-generation-for-moodle-collage-ppts/"}
---

## step 1: Download files from [Moodle](https://moodle.org/)  (https://taxila-aws.bits-pilani.ac.in/)

you can manually download the files by clicking through each file, or do the following

1. go to course page, inspect page, go to console and run below 
```js
document.querySelectorAll("a.aalink.stretched-link")
```
2. find the count of id the the session materials start... and change slice_from to that number

```js
slice_from= 12
Array.from(document.querySelectorAll("a.aalink.stretched-link")).slice(slice_from).forEach((link, i) => {
  setTimeout(() => {
    link.click();
  }, i * 1000); 
});

```

3. move all the downloaded files to a dedicated folder  (i use [yazi-rs](https://yazi-rs.github.io/) to do this)
4. use `libreoffice`  cli to convert files to pdfs
```sh
libreoffice --convert-to pdf *.ppt*
```
5. move pdf files to a new folder
```sh
mkdir pdfs
mv *.pdf pdfs/
cd pdfs/
```

6. use`pdfunite` to combine all pdfs 
```sh
pdfunite "CS1.pdf" "CS2.pdf" "CS3.pdf" "CS4.pdf" "CS5.pdf" "CS6.pdf" "CS7.pdf" "CS9.pdf" "CS10.pdf" "CS11.pdf" "CS12.pdf" "CS13,1415.pdf" statistical-inference-and-applications-consolidated-ppts.pdf
```
- you can use vim to quickly create the command
	- open vim
	- type ls
	- visual select it using `shift-v`, type `:!bash` to run it and get output back to buffer 
	- sort the files using vim edits (or you can use yazi's batch replace to change name of the files in an incremental order)
	- regex replace to add double quotes , `:%s/^/"/` and `:%s/$/"/`
	- select all with `ggVG`, press `J` to make it a single line
	- add `pdfunite` in the start and `output.pdf` at the end 
	- copy and run it in terminal
	
## optional operation

- Use `OCR` enable pdf (text searchable), use `ocrmypdf`
```sh
ocrmypdf input.pdf --force-ocr output.pdf
```
- use `pdfjam` to create tiled pdfs
```
pdfjam --nup 3x3 --paper a4paper --angle 90 --outfile output.pdf computing-and-design-ppts-consolidated.pdf
```


