import subprocess
import os

current_directory = os.path.dirname(os.path.realpath(__file__))

# Get the list of files in the current directory
files_in_directory = os.listdir(current_directory)

# Print the list of files
for file_name in files_in_directory:
    if(file_name!="script.py" and file_name!=".DS_Store"):
        subprocess.run(f"ffmpeg -i {file_name} -vf scale=20:-1 small{file_name}", shell=True, executable="/bin/zsh")