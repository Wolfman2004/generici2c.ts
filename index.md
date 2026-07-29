# Generic I2C Extension

Welcome to the **Generic I2C** extension for Microsoft MakeCode Maker.

## Features

- Generic I2C read/write
- Register read/write
- Buffer helpers
- Bit manipulation helpers
- Designed for reusable I2C peripherals

## Folder Structure

- generici2c.ts
- i2ccore.ts
- registers.ts
- buffers.ts
- bits.ts
- scan.ts
- enums.ts

## Example

```typescript
GenericI2C.initialize()
let value = GenericI2C.readRegister(0x20, 0x00)
```

## License

MIT
