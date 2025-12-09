import sys
try:
    from PIL import Image
except ImportError:
    print("PIL not found")
    sys.exit(1)

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Change all white (also shades of whites) to transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print("Successfully removed background")

if __name__ == "__main__":
    remove_white_bg("assets/logo_raw.png", "assets/logo.png")
