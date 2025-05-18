---
{"dg-publish":true,"permalink":"/fleeting-notes/consolidated-pdf-generation-for-moodle-collage-ppts/"}
---

## Step 1: Download files from [Moodle](https://moodle.org/)  (https://taxila-aws.bits-pilani.ac.in/)

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

## Step 2: organize the files 

3. move all the downloaded files to a dedicated folder  (i use [yazi-rs](https://yazi-rs.github.io/) to do this)
## Step 3: convert to pdfs

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

## Step 4: pdfunite
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
	- add `pdfunite` in the start and `output.pdf` at the end  - copy and run it in terminal
	
## Optional operations
### OCR enabled PDFs for searching text
- Use `OCR` enable pdf (text searchable), use `ocrmypdf`
```sh
ocrmypdf input.pdf --force-ocr output.pdf
```

### Tiled PDFs for printing
- use `pdfjam` to create tiled pdfs
```sh
pdfjam --landscape --nup 3x3 --paper a4paper --outfile software-design-principals-consolidated-3x3-landscape.pdf ./software-design-principals-consolidated.pdf
# pdfjam --nup 3x3 --paper a4paper --angle 90 --outfile output.pdf computing-and-design-ppts-consolidated.pdf
```

crop and zoom in

```sh
 pdfjam --trim '5mm 15mm 5mm 15mm' --clip true --landscape --nup 3x3 --paper a4paper --outfile software-design-principals-consolidated-3x3-landscape.pdf ./software-design-principals-consolidated.pdf

```

### Page number

```
pdfcpu stamp add -m text -- "%p" "pos:br, scale:0.02, rot:0" statistical-inference-and-applications-consolidated-3x3-landscape.pdf output.pdf
```

rough tests
```sh
pdfcpu stamp add -m text -- "Page %p of %P" "pos:br, scale:0.4, rot:0" database-design-ppts-consolidate.pdf output.pdf
pdfcpu stamp add -m text -- "%p" "pos:br, scale:0.4, rot:0" database-design-ppts-consolidate.pdf output.pdf      
pdfcpu nup -- "formsize:A4, orientation:rd" out9.pdf 9 database-design-ppts-consolidate.pdf                
```


