/*
  # Create Storage Bucket for Videos

  1. New Storage Bucket
    - `videos` bucket for hosting video files
    - Public access enabled for video playback
    - Max file size: 100MB per video
  
  2. Security
    - Public bucket allows read access to all users
    - Upload restricted (can be configured later if needed)
*/

-- Create the videos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  104857600, -- 100MB limit
  ARRAY['video/mp4', 'video/quicktime', 'video/webm']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to videos
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public read access for videos'
  ) THEN
    CREATE POLICY "Public read access for videos"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'videos');
  END IF;
END $$;
