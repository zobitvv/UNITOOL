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

// User's priority rankings
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

const otherRanking = [
  "excel-to-pdf", "qr-code", "csv-to-excel", "to-jpg", "lorem-ipsum-generator", "zip", "unix-timestamp", "meme-maker"
];

// All tools from sitemap
const rawTools: { slug: string; path: string; category: ToolCategory; icon: React.ElementType; description?: string }[] = [
  // PDF
  ...pdfRanking.map(slug => ({ slug, path: "pdf", category: "Pdf Tools" as const, icon: getIconForSlug(slug) })),
  { slug: "add-text", path: "pdf", category: "Pdf Tools", icon: Type },
  { slug: "annotate", path: "pdf", category: "Pdf Tools", icon: PenLine },
  { slug: "create", path: "pdf", category: "Pdf Tools", icon: FilePlusIcon },
  { slug: "delete", path: "pdf", category: "Pdf Tools", icon: Scissors },
  { slug: "from-eps", path: "pdf", category: "Pdf Tools", icon: FileImage },
  { slug: "from-msg", path: "pdf", category: "Pdf Tools", icon: Mail },
  { slug: "from-ppt", path: "pdf", category: "Pdf Tools", icon: FileVideo },
  { slug: "from-webp", path: "pdf", category: "Pdf Tools", icon: FileImage },
  { slug: "to-ppt", path: "pdf", category: "Pdf Tools", icon: FileVideo },

  // Image
  ...imageRanking.map(slug => ({ slug, path: "image", category: "Image Tools" as const, icon: getIconForSlug(slug) })),
  { slug: "combine-maker", path: "image", category: "Image Tools", icon: Layout },
  { slug: "crop-circle", path: "image", category: "Image Tools", icon: Scissors },
  { slug: "eps-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "eps-to-svg", path: "image", category: "Image Tools", icon: FileCode },
  { slug: "gif-to-apng", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "gif-to-avif", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "gif-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "heic-to-avif", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "heic-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "png-to-eps", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "psd-to-ai", path: "image", category: "Image Tools", icon: Sparkles },
  { slug: "psd-to-pdf", path: "image", category: "Image Tools", icon: FileText },
  { slug: "psd-to-svg", path: "image", category: "Image Tools", icon: FileCode },
  { slug: "svg-to-png", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "text-image-generator", path: "image", category: "Image Tools", icon: Sparkles },
  { slug: "tiff-to-svg", path: "image", category: "Image Tools", icon: FileCode },
  { slug: "tiff-to-text", path: "image", category: "Image Tools", icon: FileText },
  { slug: "vsd-to-docx", path: "image", category: "Image Tools", icon: FileText },
  { slug: "vsd-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "vsd-to-pdf", path: "image", category: "Image Tools", icon: FileText },
  { slug: "vsd-to-pptx", path: "image", category: "Image Tools", icon: Clapperboard },
  { slug: "vsdx-to-docx", path: "image", category: "Image Tools", icon: FileText },
  { slug: "vsdx-to-jpg", path: "image", category: "Image Tools", icon: FileImage },
  { slug: "vsdx-to-pdf", path: "image", category: "Image Tools", icon: FileText },
  { slug: "vsdx-to-pptx", path: "image", category: "Image Tools", icon: Clapperboard },
  { slug: "webp-to-avif", path: "image", category: "Image Tools", icon: FileImage },

  // Video
  ...videoRanking.map(slug => ({ slug, path: "video", category: "Video Tools" as const, icon: getIconForSlug(slug) })),
  { slug: "aac-to-flac", path: "video", category: "Video Tools", icon: FileAudio },
  { slug: "aac-to-m4r", path: "video", category: "Video Tools", icon: Music },
  { slug: "aac-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "aac-to-mp4", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "aac-to-wav", path: "video", category: "Video Tools", icon: FileAudio },
  { slug: "avi-to-gif", path: "video", category: "Video Tools", icon: FileImage },
  { slug: "avi-to-mkv", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "avi-to-mov", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "avi-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "avi-to-mp4", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "compress-avi", path: "video", category: "Video Tools", icon: Shrink },
  { slug: "compress-mkv", path: "video", category: "Video Tools", icon: Shrink },
  { slug: "compress-mov", path: "video", category: "Video Tools", icon: Shrink },
  { slug: "from-fb", path: "video", category: "Video Tools", icon: Facebook },
  { slug: "from-inst", path: "video", category: "Video Tools", icon: Instagram },
  { slug: "gif-to-mov", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "gif-to-webm", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "m4a-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "m4a-to-mp4", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "m4a-to-wav", path: "video", category: "Video Tools", icon: FileAudio },
  { slug: "mkv-to-avi", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mkv-to-gif", path: "video", category: "Video Tools", icon: FileImage },
  { slug: "mkv-to-mov", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mkv-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "mkv-to-mp4", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mov-to-avi", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mov-to-gif", path: "video", category: "Video Tools", icon: FileImage },
  { slug: "mov-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "mov-to-mp4", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mov-to-wav", path: "video", category: "Video Tools", icon: FileAudio },
  { slug: "mp4-to-avi", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mp4-to-gif", path: "video", category: "Video Tools", icon: FileImage },
  { slug: "mp4-to-mov", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "mp4-to-wav", path: "video", category: "Video Tools", icon: FileAudio },
  { slug: "ogg-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "ogg-to-wav", path: "video", category: "Video Tools", icon: FileAudio },
  { slug: "to-webp", path: "video", category: "Video Tools", icon: FileImage },
  { slug: "webm-to-mov", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "webm-to-mp3", path: "video", category: "Video Tools", icon: Music },
  { slug: "webm-to-mp4", path: "video", category: "Video Tools", icon: FileVideo },
  { slug: "youtube-transcript", path: "video", category: "Video Tools", icon: FileText },

  // Write
  ...writeRanking.map(slug => ({ slug, path: "write", category: "AI Write" as const, icon: getIconForSlug(slug) })),
  { slug: "article-generator", path: "write", category: "AI Write", icon: PenLine },
  { slug: "bill-sale-generator", path: "write", category: "AI Write", icon: FileText },
  { slug: "business-name-generator", path: "write", category: "AI Write", icon: Briefcase },
  { slug: "business-slogan-generator", path: "write", category: "AI Write", icon: Sparkles },
  { slug: "content-brief-generator", path: "write", category: "AI Write", icon: Map },
  { slug: "content-improver", path: "write", category: "AI Write", icon: Wand2 },
  { slug: "explain-like-five", path: "write", category: "AI Write", icon: HelpCircle },
  { slug: "facebook-ad-headlines", path: "write", category: "AI Write", icon: Facebook },
  { slug: "faq-generator", path: "write", category: "AI Write", icon: MessageSquare },
  { slug: "instagram-story-ideas", path: "write", category: "AI Write", icon: Instagram },
  { slug: "listicle-writer", path: "write", category: "AI Write", icon: List },
  { slug: "meta-description-generator", path: "write", category: "AI Write", icon: Search },
  { slug: "nda-generator", path: "write", category: "AI Write", icon: ShieldCheck },
  { slug: "paragraph-completer", path: "write", category: "AI Write", icon: Baseline },
  { slug: "paragraph-rewriter", path: "write", category: "AI Write", icon: RefreshCw },
  { slug: "paragraph-writer", path: "write", category: "AI Write", icon: PenLine },
  { slug: "podcast-writer", path: "write", category: "AI Write", icon: Mic },
  { slug: "poll-generator", path: "write", category: "AI Write", icon: List },
  { slug: "post-ideas", path: "write", category: "AI Write", icon: Sparkles },
  { slug: "post-writer", path: "write", category: "AI Write", icon: PenLine },
  { slug: "purchase-agreement-generator", path: "write", category: "AI Write", icon: FileText },
  { slug: "real-estate-description", path: "write", category: "AI Write", icon: Map },
  { slug: "sentence-rewriter", path: "write", category: "AI Write", icon: RefreshCw },
  { slug: "shorten-content", path: "write", category: "AI Write", icon: Shrink },
  { slug: "tiktok-script-writer", path: "write", category: "AI Write", icon: Video },
  { slug: "title-rewriter", path: "write", category: "AI Write", icon: RefreshCw },
  { slug: "tone-of-voice", path: "write", category: "AI Write", icon: AudioLines },
  { slug: "trivia-generator", path: "write", category: "AI Write", icon: HelpCircle },
  { slug: "word-counter", path: "write", category: "AI Write", icon: Hash },

  // Other/Converters
  ...otherRanking.map(slug => ({ slug, path: slug.includes("pdf") ? "converter" : "other", category: "Other Tools" as const, icon: getIconForSlug(slug) })),
  { slug: "automation-wizard", path: "content-machine", category: "AI Write", icon: Zap },
  { slug: "bulk-generator", path: "content-machine", category: "AI Write", icon: Zap },
  { slug: "generate-article", path: "content-machine", category: "AI Write", icon: FileText },
  { slug: "programmatic", path: "content-machine", category: "AI Write", icon: Code2 },
  { slug: "azw3-to-epub", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "azw3-to-mobi", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "csv-to-json", path: "converter", category: "Converter Tools", icon: Code2 },
  { slug: "csv-to-xml", path: "converter", category: "Converter Tools", icon: FileCode },
  { slug: "epub-to-azw3", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "epub-to-mobi", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "excel-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "excel-to-xml", path: "converter", category: "Converter Tools", icon: FileCode },
  { slug: "json-to-xml", path: "converter", category: "Converter Tools", icon: FileCode },
  { slug: "mobi-to-azw3", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "mobi-to-epub", path: "converter", category: "Converter Tools", icon: Book },
  { slug: "split-csv", path: "converter", category: "Converter Tools", icon: Scissors },
  { slug: "split-excel", path: "converter", category: "Converter Tools", icon: Scissors },
  { slug: "xml-to-csv", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml-to-excel", path: "converter", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml-to-json", path: "converter", category: "Converter Tools", icon: Code2 },
  { slug: "aac", path: "converters", category: "Converter Tools", icon: FileAudio },
  { slug: "avi", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "azw3", path: "converters", category: "Converter Tools", icon: Book },
  { slug: "csv", path: "converters", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "eps", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "epub", path: "converters", category: "Converter Tools", icon: Book },
  { slug: "gif", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "heic", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "jpg", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "m4a", path: "converters", category: "Converter Tools", icon: FileAudio },
  { slug: "mkv", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "mobi", path: "converters", category: "Converter Tools", icon: Book },
  { slug: "mov", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "mp4", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "ogg", path: "converters", category: "Converter Tools", icon: FileAudio },
  { slug: "pdf", path: "converters", category: "Converter Tools", icon: FileText },
  { slug: "png", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "psd", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "svg", path: "converters", category: "Converter Tools", icon: FileCode },
  { slug: "tiff", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "url", path: "converters", category: "Converter Tools", icon: Globe },
  { slug: "vsd", path: "converters", category: "Converter Tools", icon: FileText },
  { slug: "vsdx", path: "converters", category: "Converter Tools", icon: FileText },
  { slug: "webm", path: "converters", category: "Converter Tools", icon: FileVideo },
  { slug: "webp", path: "converters", category: "Converter Tools", icon: FileImage },
  { slug: "xls", path: "converters", category: "Converter Tools", icon: FileSpreadsheet },
  { slug: "xml", path: "converters", category: "Converter Tools", icon: FileCode },
  { slug: "detect", path: "web", category: "Web Tools", icon: ShieldCheck },
  { slug: "trace", path: "web", category: "Web Tools", icon: Globe },
  { slug: "to-png", path: "web", category: "Web Tools", icon: FileImage },
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
  if (slug.includes("youtube")) return Youtube;
  if (slug.includes("paraphrasing") || slug.includes("rephraser") || slug.includes("rewriter")) return RefreshCw;
  if (slug.includes("writer") || slug.includes("generator") || slug.includes("copy")) return PenLine;
  if (slug.includes("grammar")) return CheckCircle2;
  if (slug.includes("humanizer")) return UserCog;
  if (slug.includes("outline") || slug.includes("planner")) return Map;
  if (slug.includes("caption")) return MessageSquare;
  if (slug.includes("linkedin")) return Linkedin;
  if (slug.includes("detector")) return ShieldCheck;
  if (slug.includes("policy") || slug.includes("agreement")) return FileText;
  if (slug.includes("qr")) return QrCode;
  if (slug.includes("zip")) return Archive;
  if (slug.includes("timestamp")) return Timer;
  if (slug.includes("meme")) return Image;
  if (slug.includes("instagram")) return Instagram;
  if (slug.includes("facebook")) return Facebook;
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

// Deduplicate and process all tools
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
    } else if (t.category === "Other Tools" || t.category === "Converter Tools" || t.category === "Web Tools") {
      const idx = otherRanking.indexOf(t.slug);
      rank = idx !== -1 ? idx : 999;
    }

    return {
      title: formatTitle(t.slug),
      slug: t.slug,
      description: t.description || `Use this ${t.category.toLowerCase()} tool to ${formatTitle(t.slug).toLowerCase()}. Efficient and powerful AI processing.`,
      href: `https://tinywow.com/${t.path}/${t.slug}`,
      category: t.category,
      icon: t.icon,
      rank: rank,
    };
  })
  .sort((a, b) => a.rank - b.rank);
