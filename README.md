# AVX Builder - React Flow Node Editor

A React-based flow editor for creating and connecting nodes with different data types. Built using TypeScript and class-based React components.

The AVX Builder can generate C++ code with SIMD intrinsics for your node graphs:

- **Single Node Selection**: Only works when exactly one node is selected
- **Dependency Resolution**: Automatically includes all connected input nodes
- **SIMD Intrinsics**: Generates appropriate SSE/AVX intrinsic functions
- **Code Export**: Copy to clipboard or download as .cpp file
- **Multiple Operations**: Supports add, subtract, multiply, divide, logical operations, and more

### Supported Operations
- **SIMD Intrinsics**: Supports any SSE/AVX intrinsic function defined in the node templates
- **Data Types**: `epi8`, `epi16`, `epi32`, `epi64`, `ps`, `pd`
- **Register Types**: `xmm`, `ymm`, `zmm`
- **Custom Conversion Nodes**: Special handling for `custom_pair_convert_*` operations that just reassign registers
