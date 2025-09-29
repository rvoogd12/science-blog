# How to Add Your Worksheet PDFs

1. Create your worksheet PDFs using your preferred tool (Word, Google Docs, etc.)
2. Save each PDF with a filename that matches its ID in the system
   - For example: `polyatomic-ions.pdf` for the Polyatomic Ions worksheet
3. Place the PDFs in this folder (`public/worksheets/`)
4. The system will automatically serve these files when users click the download buttons

## Current Worksheets

- `polyatomic-ions.pdf` - Polyatomic Ions Worksheet

## Important Notes

- The filenames must exactly match the IDs used in the code
- The files must be PDF format
- The files will be directly downloadable by users
- While the email collection system is being developed, users will download these files directly

When you're ready to switch back to the email collection system:
1. Remove or comment out the middleware in `src/middleware.ts`
2. Update the WorksheetCard component to navigate to the collection pages instead of downloading directly
