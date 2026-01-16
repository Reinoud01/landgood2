
import sys
try:
    from PIL import Image
except ImportError:
    print("PIL not found")
    sys.exit(1)

def make_transparent(input_path, output_path, tolerance=30):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    # Get background color from top-left pixel
    bg_color = img.getpixel((0, 0))
    print(f"Detected background color: {bg_color}")

    newData = []
    for item in datas:
        # Check if pixel is close to background color
        if (abs(item[0] - bg_color[0]) < tolerance and 
            abs(item[1] - bg_color[1]) < tolerance and 
            abs(item[2] - bg_color[2]) < tolerance):
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved processed image to {output_path}")

if __name__ == "__main__":
    input_file = "/Users/rtencate/.gemini/antigravity/brain/f1cd71b9-26cb-4ffe-8b27-46f722f2f3cd/uploaded_image_1767269032233.png"
    output_file = "assets/logo.png"
    make_transparent(input_file, output_file)
