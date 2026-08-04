import os

from dotenv import load_dotenv


load_dotenv()



OPENAI_API_KEY=os.getenv(
"OPENAI_API_KEY"
)



AZURE_KEY=os.getenv(
"AZURE_SPEECH_KEY"
)


AZURE_REGION=os.getenv(
"AZURE_SPEECH_REGION"
)



VISION_KEY=os.getenv(
"AZURE_VISION_KEY"
)


VISION_ENDPOINT=os.getenv(
"AZURE_VISION_ENDPOINT"
)



SUPABASE_URL=os.getenv(
"SUPABASE_URL"
)


SUPABASE_KEY=os.getenv(
"SUPABASE_KEY"
)
