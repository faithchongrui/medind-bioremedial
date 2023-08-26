from __future__ import print_function

import io

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload
from google.oauth2.credentials import Credentials


def export_pdf(real_file_id):
    """Download a Document file in PDF format.
    Args:
        real_file_id : file ID of any workspace document format file
    Returns : IO object with location

    Load pre-authorized user credentials from the environment.
    TODO(developer) - See https://developers.google.com/identity
    for guides on implementing OAuth2 for the application.
    """
    credentials = Credentials.from_authorized_user_file('token.json')

    try:
        # create drive api client
        service = build('drive', 'v3', credentials=credentials)

        file_id = real_file_id

        # pylint: disable=maybe-no-member
        request = service.files().export_media(fileId=file_id,
                                               mimeType='application/pdf')
        file = io.BytesIO()
        downloader = MediaIoBaseDownload(file, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
            print(F'Download {int(status.progress() * 100)}.')

    except HttpError as error:
        print(F'An error occurred: {error}')
        file = None

    return file.getvalue()


if __name__ == '__main__':
    export_pdf(real_file_id='1zbp8wAyuImX91Jt9mI-CAX_1TqkBLDEDcr2WeXBbKUY')