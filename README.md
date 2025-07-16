# Time

A minimalist stopwatch application with precision timing.

## Features

- **High Precision Timing** - Uses performance.now() for sub-millisecond accuracy
- **Lap Recording** - Track multiple intervals with individual timing
- **Session Persistence** - Automatically saves and restores your timing session
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Zero Dependencies** - Complete single-file application

## Usage

Simply open `index.html` in any modern web browser. No installation or setup required.

### Controls
- **Start/Stop** - Begin or pause timing
- **Lap** - Record interval times while running
- **Reset** - Clear all times and return to zero

## Technical Details

- **Format**: MM:SS.MS (minutes:seconds.centiseconds)
- **Accuracy**: ±2ms typical precision
- **Storage**: Uses localStorage for session persistence
- **Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)

## Files

- `index.html` - Main application (open this file)
- `precision-test.js` - Timer accuracy testing
- `test-*.html` - Development testing suites

## License

Open source - feel free to use and modify as needed.