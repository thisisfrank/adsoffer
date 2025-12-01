/*
  # Allow Public Video Uploads

  1. Security Changes
    - Add policy to allow public uploads to videos bucket
    - This enables the upload script to work with anon key
*/

-- Allow public upload access to videos bucket
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public upload access for videos'
  ) THEN
    CREATE POLICY "Public upload access for videos"
    ON storage.objects
    FOR INSERT
    TO public
    WITH CHECK (bucket_id = 'videos');
  END IF;
END $$;

-- Allow public update access (for upsert)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public update access for videos'
  ) THEN
    CREATE POLICY "Public update access for videos"
    ON storage.objects
    FOR UPDATE
    TO public
    USING (bucket_id = 'videos')
    WITH CHECK (bucket_id = 'videos');
  END IF;
END $$;
