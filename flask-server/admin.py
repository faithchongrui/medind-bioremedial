import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os

cred = credentials.Certificate('credentials/serviceAccount.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

textFiles = './TextFiles'

def read_text_file(file_path):
    word_list = []
    with open(file_path, 'r') as file:
        for line in file:
            words = line.strip().split()
            word_list.extend(words)
    return word_list

def read_words_from_folder(folder_path):
    files_word_dict = {}

    for filename in os.listdir(folder_path):
        if filename.endswith('.txt'):
            file_path = os.path.join(folder_path, filename)
            word_list = read_text_file(file_path)
            files_word_dict[filename] = word_list
    
    return files_word_dict

def push_to_firebase(files_word_dict):
    for filename, word_list in files_word_dict.items():
        collection_ref = db.collection('activities').document(filename).collection('keywords')
        for word in word_list:
            doc_ref = collection_ref.document(word)
            doc_ref.set({
                "id": word_list.index(word),
                "word": word
            })

if __name__ == '__main__':
    files_word_dict = read_words_from_folder(textFiles)
    push_to_firebase(files_word_dict)

