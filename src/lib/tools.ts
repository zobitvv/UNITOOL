import React from 'react';
import {
  FileText,
  Wand2,
  BookOpen,
  Image,
  Eraser,
  Merge,
  FileEdit,
  FileImage,
  FileUp,
  Scaling,
  Shrink,
  Book,
  Scissors,
  FileLock2,
  FileSpreadsheet,
  User,
  CaseSensitive,
  Library,
  FileVideo,
  Wind,
  AudioLines,
  Youtube,
  UserCog,
  FileKey2,
  PenLine,
  QrCode,
  Link,
  RotateCw,
  Timer,
  VolumeX,
  Type,
  Baseline,
  Briefcase,
  Star,
  HelpCircle,
  File,
  FlipHorizontal,
  FileSearch,
  Languages,
  Signature,
  PieChart,
  Palette,
  Eye,
  Settings,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Hash,
  Mail,
  List,
  FileCode,
  Music,
  Video,
  Layout,
  Globe,
  Archive,
  Subtitles,
  Mic,
  Clapperboard,
  FileAudio,
  Code2,
  Map,
  History,
  Activity,
  Zap,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Monitor,
  Printer,
  Search,
  MessageSquare,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

export type ToolCategory = 'AI Write' | 'Image Tools' | 'Pdf Tools' | 'Video Tools' | 'Converter Tools' | 'Web Tools' | 'Other Tools';

export type Tool = {
  title: string;
  slug: string;
  description: string;
  href: string;
  category: ToolCategory;
  icon: React.ElementType;
  rank: number;
};

function formatTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => {
      const upper = word.toUpperCase();
      if (['PDF', 'JPG', 'PNG', 'SVG', 'HEIC', 'WEBP', 'EPS', 'TIFF', 'AI', 'AZW3', 'MOBI', 'EPUB', 'XLS', 'XLSX', 'CSV', 'JSON', 'XML', 'PPT', 'PPTX', 'DOCX', 'MSG', 'URL', 'AAC', 'MP3', 'MP4', 'M4A', 'WAV', 'OGG', 'MKV', 'AVI', 'MOV', 'FLAC', 'M4R', 'WEBM', 'GIF', 'APNG', 'AVIF', 'NDA', 'FB', 'INST'].includes(upper)) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

const pdfRanking = [
  "merge", "compress", "to-word", "to-jpg", "split", "from-word", "remove-watermark", "edit", "extract-text", "to-png",
  "watermark", "rearrange", "from-jpg", "to-text", "sign", "unlock", "add-text", "add-images", "rotate", "extract-img",
  "create", "delete", "crop", "annotate", "protect", "from-png", "summarizer", "to-xlsx", "to-epub", "add-pages",
  "from-url", "to-mobi", "to-csv", "from-epub", "from-mobi", "from-heic", "from-gif", "from-azw3", "from-tiff"
];

const imageRanking = [
  "remove-bg", "compress", "resize", "jpg-to-png", "png-to-jpg", "make-background-transparent", "ai-image-generator",
  "upscale", "remove-objects", "remove-watermark-photo", "ai-art-generator", "cleanup-picture", "unblur", "blur-background",
  "crop", "repair-defects", "collage-maker", "remove-text-photo", "profile-photo", "colorize-photo", "grayscale",
  "sharpen", "pixelate", "flip", "translate", "to-text", "border", "change-bg-photo", "text-to-image", "metadata",
  "split", "font-to-png", "chart-maker", "heic-to-jpg", "webp-to-jpg", "psd-to-png", "gif-to-jpg", "png-to-webp",
  "jpg-to-webp", "remove-person", "png-to-svg", "jpg-to-gif", "tiff-to-jpg", "svg-to-png", "png-to-gif", "heic-to-png",
  "webp-to-png", "eps-to-jpg", "psd-to-jpg", "tiff-to-png", "png-to-avif", "jpg-to-avif"
];

const videoRanking = [
  "compress", "mp4-to-mp3", "cutter", "extract-audio", "mp4-to-gif", "resize", "to-gif", "mute", "add-subtitles",
  "mp4-to-mov", "transcribe-podcast", "summarize-podcast", "from-tiktok", "mp4-to-webm", "audio-to-text",
  "gif-to-mp4", "mkv-to-mp4", "from-twitter", "youtube-to-text", "mp4-to-ogg"
];

const writeRanking = [
  "paraphrasing", "article-writer", "ai-rephraser", "grammar-fixer", "summarize-youtube", "content-summarizer",
  "article-rewriter", "humanizer-ai", "essay-writer", "blog-outline", "post-generator", "content-planner",
  "instagram-caption-generator", "translate", "linkedin-post-generator", "ai-twitter-generator", "post-rewriter",
  "youtube-script-writer", "cold-email-writer", "landing-page-copy", "ai-detector", "press-release-generator",
  "privacy-policy-generator", "business-plan-generator", "story-generator"
];

const converterRanking = [
  "excel-to-pdf", "csv-to-excel", "xml-to-json", "json-to-xml", "excel-to-csv", "azw3-to-epub", "azw3-to-mobi", 
  "epub-to-azw3", "epub-to-mobi", "mobi-to-azw3", "mobi-to-epub", "csv-to-json", "csv-to-xml", "excel-to-xml",
  "xml-to-csv", "xml-to-excel", "split-csv", "split-excel"
];

const otherRanking = [
  "qr-code", "lorem-ipsum-generator", "zip", "unix-timestamp", "meme-maker"
];

const rawTools: { slug: string; path: string; category: ToolCategory; icon: React.ElementType; description?: string }[] = [
  // PDF
  { slug: "merge", path: "pdf", category: "Pdf Tools", icon: Merge, description: "Combine multiple PDF files into one single document seamlessly." },
  { slug: "compress", path: "pdf", category: "Pdf Tools", icon: Shrink, description: "Reduce the file size of your PDF documents while maintaining quality." },
  { slug: "to-word", path: "pdf", category: "Pdf Tools", icon: FileText, description: "Convert your PDF files into editable Microsoft Word documents." },
  { slug: "to-jpg", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Extract pages from a PDF and save them as high-quality JPG images." },
  { slug: "split", path: "pdf", category: "Pdf Tools", icon: Scissors, description: "Divide a single PDF file into multiple separate documents." },
  { slug: "from-word", path: "pdf", category: "Pdf Tools", icon: FileText, description: "Create a professional PDF document from a Microsoft Word file." },
  { slug: "remove-watermark", path: "pdf", category: "Pdf Tools", icon: Eraser, description: "Easily remove unwanted watermarks from your PDF files." },
  { slug: "edit", path: "pdf", category: "Pdf Tools", icon: FileEdit, description: "Modify text, images, and pages within your PDF document." },
  { slug: "extract-text", path: "pdf", category: "Pdf Tools", icon: FileText, description: "Pull out all text content from a PDF file for easy reuse." },
  { slug: "to-png", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Convert PDF pages into transparent or high-quality PNG images." },
  { slug: "watermark", path: "pdf", category: "Pdf Tools", icon: StampIcon as any, description: "Add custom text or image watermarks to your PDF documents." },
  { slug: "rearrange", path: "pdf", category: "Pdf Tools", icon: List, description: "Change the order of pages within your PDF file easily." },
  { slug: "from-jpg", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Convert one or more JPG images into a single PDF document." },
  { slug: "to-text", path: "pdf", category: "Pdf Tools", icon: FileText, description: "Convert PDF documents into plain text files." },
  { slug: "sign", path: "pdf", category: "Pdf Tools", icon: Signature, description: "Electronically sign your PDF documents with ease." },
  { slug: "unlock", path: "pdf", category: "Pdf Tools", icon: FileKey2, description: "Remove passwords and restrictions from secured PDF files." },
  { slug: "add-text", path: "pdf", category: "Pdf Tools", icon: Type, description: "Insert new text boxes and content into existing PDF pages." },
  { slug: "add-images", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Place images and logos into your PDF documents." },
  { slug: "rotate", path: "pdf", category: "Pdf Tools", icon: RotateCw, description: "Permanently rotate PDF pages to the correct orientation." },
  { slug: "extract-img", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Extract all embedded images from a PDF file." },
  { slug: "create", path: "pdf", category: "Pdf Tools", icon: FilePlusIcon as any, description: "Build a new PDF document from scratch or other files." },
  { slug: "delete", path: "pdf", category: "Pdf Tools", icon: Scissors, description: "Remove specific pages from a PDF document." },
  { slug: "crop", path: "pdf", category: "Pdf Tools", icon: Scissors, description: "Trim the margins and adjust the visible area of PDF pages." },
  { slug: "annotate", path: "pdf", category: "Pdf Tools", icon: PenLine, description: "Add notes, highlights, and drawings to your PDF files." },
  { slug: "protect", path: "pdf", category: "Pdf Tools", icon: FileLock2, description: "Encrypt and password-protect your sensitive PDF documents." },
  { slug: "from-png", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Create a PDF document from your PNG image files." },
  { slug: "summarizer", path: "pdf", category: "Pdf Tools", icon: BookOpen, description: "Use AI to generate a concise summary of long PDF documents." },
  { slug: "to-xlsx", path: "pdf", category: "Pdf Tools", icon: FileSpreadsheet, description: "Convert PDF tables and data into Microsoft Excel spreadsheets." },
  { slug: "to-epub", path: "pdf", category: "Pdf Tools", icon: Book, description: "Convert PDF files into EPUB format for e-readers." },
  { slug: "add-pages", path: "pdf", category: "Pdf Tools", icon: FilePlusIcon as any, description: "Insert extra pages into an existing PDF document." },
  { slug: "from-url", path: "pdf", category: "Pdf Tools", icon: Globe, description: "Convert a webpage URL into a high-quality PDF document." },
  { slug: "to-mobi", path: "pdf", category: "Pdf Tools", icon: Book, description: "Convert PDF documents into MOBI format for Kindle." },
  { slug: "to-csv", path: "pdf", category: "Pdf Tools", icon: FileSpreadsheet, description: "Extract PDF table data into a comma-separated values (CSV) file." },
  { slug: "from-epub", path: "pdf", category: "Pdf Tools", icon: Book, description: "Convert EPUB e-books back into standard PDF format." },
  { slug: "from-mobi", path: "pdf", category: "Pdf Tools", icon: Book, description: "Convert Kindle MOBI files into PDF format." },
  { slug: "from-heic", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Convert Apple HEIC photos into a PDF document." },
  { slug: "from-gif", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Convert GIF images into a PDF file." },
  { slug: "from-azw3", path: "pdf", category: "Pdf Tools", icon: Book, description: "Convert AZW3 e-books into PDF format." },
  { slug: "from-tiff", path: "pdf", category: "Pdf Tools", icon: FileImage, description: "Convert multi-page TIFF images into a PDF." },

  // Image
  { slug: "remove-bg", path: "image", category: "Image Tools", icon: Eraser, description: "Automatically detect and remove the background from any photo." },
  { slug: "compress", path: "image", category: "Image Tools", icon: Shrink, description: "Optimize image file size without losing visible quality." },
  { slug: "resize", path: "image", category: "Image Tools", icon: Scaling, description: "Change the dimensions of your image for social media or web." },
  { slug: "jpg-to-png", path: "image", category: "Image Tools", icon: FileImage, description: "Convert JPG photos into high-quality PNG format." },
  { slug: "png-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert PNG images into standard JPG format." },
  { slug: "make-background-transparent", path: "image", category: "Image Tools", icon: Eraser, description: "Turn solid backgrounds into transparent ones for logos." },
  { slug: "ai-image-generator", path: "image", category: "Image Tools", icon: Sparkles, description: "Create unique images from text prompts using advanced AI." },
  { slug: "upscale", path: "image", category: "Image Tools", icon: Scaling, description: "Increase image resolution and detail using AI upscaling." },
  { slug: "remove-objects", path: "image", category: "Image Tools", icon: Eraser, description: "Erase unwanted objects or people from your photos." },
  { slug: "remove-watermark-photo", path: "image", category: "Image Tools", icon: Eraser, description: "Clean up photos by removing unwanted text or watermarks." },
  { slug: "ai-art-generator", path: "image", category: "Image Tools", icon: Sparkles, description: "Transform your ideas into stunning digital art with AI." },
  { slug: "cleanup-picture", path: "image", category: "Image Tools", icon: Eraser, description: "Retouch photos and remove blemishes or distractions." },
  { slug: "unblur", path: "image", category: "Image Tools", icon: Wand2, description: "Fix blurry photos and enhance sharpness with AI." },
  { slug: "blur-background", path: "image", category: "Image Tools", icon: Wand2, description: "Add a professional depth-of-field blur to your photo backgrounds." },
  { slug: "crop", path: "image", category: "Image Tools", icon: Scissors, description: "Cut and trim images to your desired aspect ratio." },
  { slug: "repair-defects", path: "image", category: "Image Tools", icon: Wand2, description: "Fix old or damaged photos by repairing scratches and spots." },
  { slug: "collage-maker", path: "image", category: "Image Tools", icon: Layout, description: "Combine multiple photos into a single beautiful layout." },
  { slug: "remove-text-photo", path: "image", category: "Image Tools", icon: Eraser, description: "Quickly remove text overlays from any image." },
  { slug: "profile-photo", path: "image", category: "Image Tools", icon: User, description: "Create professional-looking profile pictures for social media." },
  { slug: "colorize-photo", path: "image", category: "Image Tools", icon: Palette, description: "Add vibrant color to old black and white photographs." },
  { slug: "grayscale", path: "image", category: "Image Tools", icon: Palette, description: "Convert color photos into classic black and white images." },
  { slug: "sharpen", path: "image", category: "Image Tools", icon: Wand2, description: "Enhance details and edges in your photos for better clarity." },
  { slug: "pixelate", path: "image", category: "Image Tools", icon: Palette, description: "Add a pixelated effect to images for artistic or privacy reasons." },
  { slug: "flip", path: "image", category: "Image Tools", icon: FlipHorizontal, description: "Mirror your image horizontally or vertically." },
  { slug: "translate", path: "image", category: "Image Tools", icon: Languages, description: "Translate text directly within your images using AI." },
  { slug: "to-text", path: "image", category: "Image Tools", icon: FileText, description: "Extract text from an image using Optical Character Recognition (OCR)." },
  { slug: "border", path: "image", category: "Image Tools", icon: Layout, description: "Add custom decorative borders to your photographs." },
  { slug: "change-bg-photo", path: "image", category: "Image Tools", icon: Eraser, description: "Replace your photo's background with a new scene or color." },
  { slug: "text-to-image", path: "image", category: "Image Tools", icon: Sparkles, description: "Generate visual content based on descriptive text." },
  { slug: "metadata", path: "image", category: "Image Tools", icon: FileSearch, description: "View and edit hidden EXIF and metadata information in photos." },
  { slug: "split", path: "image", category: "Image Tools", icon: Scissors, description: "Divide a large image into several smaller pieces or tiles." },
  { slug: "font-to-png", path: "image", category: "Image Tools", icon: Type, description: "Convert text using any font into a high-quality PNG image." },
  { slug: "chart-maker", path: "image", category: "Image Tools", icon: PieChart, description: "Create professional charts and graphs for presentations." },
  { slug: "heic-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert iPhone HEIC photos into compatible JPG format." },
  { slug: "webp-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert modern WEBP images into standard JPG format." },
  { slug: "psd-to-png", path: "image", category: "Image Tools", icon: FileImage, description: "Convert Adobe Photoshop PSD files into PNG images." },
  { slug: "gif-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert an animated or static GIF into a JPG photo." },
  { slug: "png-to-webp", path: "image", category: "Image Tools", icon: FileImage, description: "Convert PNG images into highly efficient WEBP format." },
  { slug: "jpg-to-webp", path: "image", category: "Image Tools", icon: FileImage, description: "Convert JPG images into high-performance WEBP format." },
  { slug: "remove-person", path: "image", category: "Image Tools", icon: Eraser, description: "Erase photobombers or specific people from your images." },
  { slug: "png-to-svg", path: "image", category: "Image Tools", icon: FileCode, description: "Vectorize PNG images into scalable SVG graphics." },
  { slug: "jpg-to-gif", path: "image", category: "Image Tools", icon: FileImage, description: "Convert a JPG photo into a GIF format." },
  { slug: "tiff-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert large TIFF files into standard JPG images." },
  { slug: "svg-to-png", path: "image", category: "Image Tools", icon: FileImage, description: "Convert scalable SVG graphics into raster PNG images." },
  { slug: "png-to-gif", path: "image", category: "Image Tools", icon: FileImage, description: "Convert a PNG image into GIF format." },
  { slug: "heic-to-png", path: "image", category: "Image Tools", icon: FileImage, description: "Convert Apple's HEIC photos into PNG format." },
  { slug: "webp-to-png", path: "image", category: "Image Tools", icon: FileImage, description: "Convert modern WEBP images into PNG format." },
  { slug: "eps-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert EPS vector files into standard JPG images." },
  { slug: "psd-to-jpg", path: "image", category: "Image Tools", icon: FileImage, description: "Convert Photoshop files into JPG images." },
  { slug: "tiff-to-png", path: "image", category: "Image Tools", icon: FileImage, description: "Convert TIFF images into PNG format." },
  { slug: "png-to-avif", path: "image", category: "Image Tools", icon: FileImage, description: "Convert PNG images into next-gen AVIF format." },
  { slug: "jpg-to-avif", path: "image", category: "Image Tools", icon: FileImage, description: "Convert JPG images into ultra-efficient AVIF format." },

  // Video
  { slug: "compress", path: "video", category: "Video Tools", icon: Shrink, description: "Shrink video file sizes for easier sharing without losing quality." },
  { slug: "mp4-to-mp3", path: "video", category: "Video Tools", icon: Music, description: "Extract audio from MP4 videos and save it as an MP3 file." },
  { slug: "cutter", path: "video", category: "Video Tools", icon: Scissors, description: "Trim and cut your videos to remove unwanted parts." },
  { slug: "extract-audio", path: "video", category: "Video Tools", icon: Music, description: "Pull high-quality audio tracks from any video file." },
  { slug: "mp4-to-gif", path: "video", category: "Video Tools", icon: FileImage, description: "Create animated GIFs from short video clips." },
  { slug: "resize", path: "video", category: "Video Tools", icon: Scaling, description: "Adjust video dimensions for different social media platforms." },
  { slug: "to-gif", path: "video", category: "Video Tools", icon: FileImage, description: "Convert any video format into an animated GIF." },
  { slug: "mute", path: "video", category: "Video Tools", icon: VolumeX, description: "Remove all sound from a video file." },
  { slug: "add-subtitles", path: "video", category: "Video Tools", icon: Subtitles, description: "Burn subtitles or captions directly into your video files." },
  { slug: "mp4-to-mov", path: "video", category: "Video Tools", icon: FileVideo, description: "Convert MP4 videos to Apple's MOV format." },
  { slug: "transcribe-podcast", path: "video", category: "Video Tools", icon: FileText, description: "Convert podcast audio or video into accurate text transcripts." },
  { slug: "summarize-podcast", path: "video", category: "Video Tools", icon: BookOpen, description: "Get a concise AI-generated summary of long podcast episodes." },
  { slug: "mp4-to-webm", path: "video", category: "Video Tools", icon: FileVideo, description: "Convert MP4 videos into web-friendly WEBM format." },
  { slug: "audio-to-text", path: "video", category: "Video Tools", icon: FileText, description: "Transcribe spoken audio into editable text." },
  { slug: "gif-to-mp4", path: "video", category: "Video Tools", icon: FileVideo, description: "Convert animated GIFs into high-quality MP4 videos." },
  { slug: "mkv-to-mp4", path: "video", category: "Video Tools", icon: FileVideo, description: "Convert MKV files to the widely supported MP4 format." },
  { slug: "youtube-to-text", path: "video", category: "Video Tools", icon: FileText, description: "Extract transcripts and text content from YouTube videos." },
  { slug: "mp4-to-ogg", path: "video", category: "Video Tools", icon: FileVideo, description: "Convert MP4 videos into open-source OGG format." },

  // Write
  { slug: "paraphrasing", path: "write", category: "AI Write", icon: RefreshCw, description: "Rewrite sentences and paragraphs to improve clarity and flow." },
  { slug: "article-writer", path: "write", category: "AI Write", icon: PenLine, description: "Generate full-length articles and blog posts with AI." },
  { slug: "ai-rephraser", path: "write", category: "AI Write", icon: RefreshCw, description: "Rewrite text in different tones and styles using AI." },
  { slug: "grammar-fixer", path: "write", category: "AI Write", icon: CheckCircle2, description: "Automatically detect and correct grammar and spelling errors." },
  { slug: "summarize-youtube", path: "write", category: "AI Write", icon: BookOpen, description: "Get instant summaries of YouTube videos to save time." },
  { slug: "content-summarizer", path: "write", category: "AI Write", icon: BookOpen, description: "Condense long articles and documents into key points." },
  { slug: "article-rewriter", path: "write", category: "AI Write", icon: RefreshCw, description: "Rewrite existing articles to create unique new versions." },
  { slug: "humanizer-ai", path: "write", category: "AI Write", icon: UserCog, description: "Adjust AI-generated text to sound more natural and human-like." },
  { slug: "essay-writer", path: "write", category: "AI Write", icon: PenLine, description: "Create structured essays and academic papers with AI assistance." },
  { slug: "blog-outline", path: "write", category: "AI Write", icon: Map, description: "Generate comprehensive outlines for your next blog post." },
  { slug: "post-generator", path: "write", category: "AI Write", icon: PenLine, description: "Create engaging social media posts for any platform." },
  { slug: "content-planner", path: "write", category: "AI Write", icon: Map, description: "Organize and plan your content strategy with AI suggestions." },
  { slug: "instagram-caption-generator", path: "write", category: "AI Write", icon: MessageSquare, description: "Generate catchy and relevant captions for Instagram photos." },
  { slug: "translate", path: "write", category: "AI Write", icon: Languages, description: "Translate text accurately across dozens of languages." },
  { slug: "linkedin-post-generator", path: "write", category: "AI Write", icon: Linkedin, description: "Craft professional posts specifically for LinkedIn." },
  { slug: "ai-twitter-generator", path: "write", category: "AI Write", icon: Twitter, description: "Generate viral tweets and threads using AI." },
  { slug: "post-rewriter", path: "write", category: "AI Write", icon: RefreshCw, description: "Give your social media posts a fresh new perspective." },
  { slug: "youtube-script-writer", path: "write", category: "AI Write", icon: PenLine, description: "Create engaging scripts for your YouTube videos." },
  { slug: "cold-email-writer", path: "write", category: "AI Write", icon: Mail, description: "Write persuasive cold emails that get responses." },
  { slug: "landing-page-copy", path: "write", category: "AI Write", icon: PenLine, description: "Generate high-converting copy for your product landing pages." },
  { slug: "ai-detector", path: "write", category: "AI Write", icon: ShieldCheck, description: "Check if a piece of text was likely written by an AI." },
  { slug: "press-release-generator", path: "write", category: "AI Write", icon: PenLine, description: "Write professional press releases for your news or products." },
  { slug: "privacy-policy-generator", path: "write", category: "AI Write", icon: ShieldCheck, description: "Generate standard privacy policies for your website." },
  { slug: "business-plan-generator", path: "write", category: "AI Write", icon: Briefcase, description: "Create structured business plans with AI guidance." },
  { slug: "story-generator", path: "write", category: "AI Write", icon: Sparkles, description: "Generate creative stories and fictional plots with AI." },

  // Converter Tools
  { slug: "excel-to-pdf", path: "converter", category: "Converter Tools", icon: FileText, description: "Instantly convert Excel sheets to high-quality PDF files." },
  { slug: "csv-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet, description: "Transform CSV data into editable Excel spreadsheets." },
  { slug: "xml-to-json", path: "converter", category: "Converter Tools", icon: FileCode, description: "Convert XML data structures into readable JSON format." },
  { slug: "json-to-xml", path: "converter", category: "Converter Tools", icon: FileCode, description: "Turn JSON data objects into structured XML documents." },
  { slug: "excel-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet, description: "Export Excel worksheets to standard CSV files." },
  { slug: "azw3-to-epub", path: "converter", category: "Converter Tools", icon: Book, description: "Convert Kindle AZW3 e-books to EPUB format for general readers." },
  { slug: "azw3-to-mobi", path: "converter", category: "Converter Tools", icon: Book, description: "Convert AZW3 books to the legacy MOBI kindle format." },
  { slug: "epub-to-azw3", path: "converter", category: "Converter Tools", icon: Book, description: "Prepare your EPUB books for Kindle by converting to AZW3." },
  { slug: "epub-to-mobi", path: "converter", category: "Converter Tools", icon: Book, description: "Convert EPUB e-books to MOBI format easily." },
  { slug: "mobi-to-azw3", path: "converter", category: "Converter Tools", icon: Book, description: "Update your old MOBI books to modern Kindle AZW3 format." },
  { slug: "mobi-to-epub", path: "converter", category: "Converter Tools", icon: Book, description: "Free your MOBI books by converting them to standard EPUB." },
  { slug: "csv-to-json", path: "converter", category: "Converter Tools", icon: FileCode, description: "Map your CSV data rows to JSON objects." },
  { slug: "csv-to-xml", path: "converter", category: "Converter Tools", icon: FileCode, description: "Convert tabular CSV data into nested XML trees." },
  { slug: "excel-to-xml", path: "converter", category: "Converter Tools", icon: FileCode, description: "Turn complex Excel workbooks into XML data feeds." },
  { slug: "xml-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet, description: "Flatten XML data into a simple CSV table format." },
  { slug: "xml-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet, description: "Convert XML reports into searchable Excel files." },
  { slug: "split-csv", path: "converter", category: "Converter Tools", icon: Scissors, description: "Break large CSV files into smaller, manageable chunks." },
  { slug: "split-excel", path: "converter", category: "Converter Tools", icon: Scissors, description: "Split multi-sheet Excel files or large workbooks." },

  // Other/Common
  { slug: "qr-code", path: "other", category: "Other Tools", icon: QrCode, description: "Generate custom QR codes for URLs, text, or wifi." },
  { slug: "lorem-ipsum-generator", path: "other", category: "Other Tools", icon: Type, description: "Generate placeholder 'Lorem Ipsum' text for your designs." },
  { slug: "zip", path: "other", category: "Other Tools", icon: Archive, description: "Compress multiple files into a single ZIP archive." },
  { slug: "unix-timestamp", path: "other", category: "Other Tools", icon: Timer, description: "Convert dates to Unix timestamps and vice versa." },
  { slug: "meme-maker", path: "other", category: "Other Tools", icon: Image, description: "Create funny memes with custom text and images." },
];

function getIconForSlug(slug: string): React.ElementType {
  if (slug.includes("merge")) return Merge;
  if (slug.includes("compress")) return Shrink;
  if (slug.includes("word")) return FileText;
  if (slug.includes("jpg") || slug.includes("png") || slug.includes("image") || slug.includes("photo")) return FileImage;
  if (slug.includes("split")) return Scissors;
  if (slug.includes("remove-watermark")) return Eraser;
  if (slug.includes("edit")) return FileEdit;
  if (slug.includes("extract-text")) return FileText;
  if (slug.includes("watermark")) return StampIcon as any;
  if (slug.includes("rearrange")) return List;
  if (slug.includes("sign")) return Signature;
  if (slug.includes("unlock")) return FileKey2;
  if (slug.includes("add-text")) return Type;
  if (slug.includes("rotate")) return RotateCw;
  if (slug.includes("crop")) return Scissors;
  if (slug.includes("annotate")) return PenLine;
  if (slug.includes("protect")) return FileLock2;
  if (slug.includes("summarize") || slug.includes("summarizer")) return BookOpen;
  if (slug.includes("xlsx") || slug.includes("csv") || slug.includes("excel")) return FileSpreadsheet;
  if (slug.includes("epub") || slug.includes("mobi") || slug.includes("azw3")) return Book;
  if (slug.includes("url")) return Globe;
  if (slug.includes("bg") || slug.includes("background")) return Eraser;
  if (slug.includes("resize") || slug.includes("upscale")) return Scaling;
  if (slug.includes("ai")) return Sparkles;
  if (slug.includes("unblur") || slug.includes("sharpen")) return Wand2;
  if (slug.includes("collage")) return Layout;
  if (slug.includes("profile")) return User;
  if (slug.includes("grayscale") || slug.includes("colorize") || slug.includes("pixelate")) return Palette;
  if (slug.includes("flip")) return FlipHorizontal;
  if (slug.includes("translate")) return Languages;
  if (slug.includes("border")) return Layout;
  if (slug.includes("metadata")) return FileSearch;
  if (slug.includes("mp4") || slug.includes("video") || slug.includes("mov") || slug.includes("webm") || slug.includes("mkv") || slug.includes("avi")) return FileVideo;
  if (slug.includes("mp3") || slug.includes("audio") || slug.includes("m4a") || slug.includes("wav") || slug.includes("ogg") || slug.includes("aac")) return FileAudio;
  if (slug.includes("cutter")) return Scissors;
  if (slug.includes("mute")) return VolumeX;
  if (slug.includes("subtitle")) return Subtitles;
  if (slug.includes("podcast")) return Mic;
  if (slug.includes("tiktok")) return Video;
  if (slug.includes("twitter")) return Twitter;
  if (slug.includes("instagram")) return Instagram;
  if (slug.includes("facebook")) return Facebook;
  if (slug.includes("linkedin")) return Linkedin;
  return File;
}

function FilePlusIcon(props: any) {
  return React.createElement(
    'svg',
    {
      ...props,
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    React.createElement('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
    React.createElement('polyline', { points: '14 2 14 8 20 8' }),
    React.createElement('line', { x1: '12', y1: '18', x2: '12', y2: '12' }),
    React.createElement('line', { x1: '9', y1: '15', x2: '15', y2: '15' })
  );
}

function StampIcon(props: any) {
  return React.createElement(
    'svg',
    {
      ...props,
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    React.createElement('path', { d: 'M5 22h14' }),
    React.createElement('path', { d: 'M12 17v-4' }),
    React.createElement('path', { d: 'M12 7c-2.8 0-4 1.2-4 4v2h8v-2c0-2.8-1.2-4-4-4z' }),
    React.createElement('path', { d: 'M12 2a3 3 0 0 0-3 3v2h6V5a3 3 0 0 0-3-3z' })
  );
}

const seenSlugs = new Set<string>();
export const tools: Tool[] = rawTools
  .filter((t) => {
    if (seenSlugs.has(`${t.category}-${t.slug}`)) return false;
    seenSlugs.add(`${t.category}-${t.slug}`);
    return true;
  })
  .map((t) => {
    let rank = 999;
    if (t.category === "Pdf Tools") {
      const idx = pdfRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    } else if (t.category === "Image Tools") {
      const idx = imageRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    } else if (t.category === "Video Tools") {
      const idx = videoRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    } else if (t.category === "AI Write") {
      const idx = writeRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    } else if (t.category === "Converter Tools") {
      const idx = converterRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    } else if (t.category === "Other Tools") {
      const idx = otherRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    }

    return {
      title: formatTitle(t.slug),
      slug: t.slug,
      description: t.description || `Use this ${t.category.toLowerCase()} tool to ${formatTitle(t.slug).toLowerCase()} quickly and accurately.`,
      href: `https://tinywow.com/${t.path}/${t.slug}`,
      category: t.category,
      icon: t.icon,
      rank: rank,
    };
  })
  .sort((a, b) => a.rank - b.rank);
