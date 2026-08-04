from PIL import Image

import pytesseract



def read_image(path):


    img=Image.open(path)


    text=pytesseract.image_to_string(

    img,

    lang="eng"

    )


    return text
