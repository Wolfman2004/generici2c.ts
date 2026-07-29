# Examples

## Example 1 - Read a register

```typescript
GenericI2C.initialize()
let id = GenericI2C.readRegister(0x20, 0x00)
```

## Example 2 - Write a register

```typescript
GenericI2C.writeRegister(0x20, 0x01, 0x55)
```

## Example 3 - Read a buffer

```typescript
let data = GenericI2C.readBuffer(0x20, 8)
```

## Example 4 - Write a buffer

```typescript
let b = GenericI2CBuffers.create(2)
GenericI2CBuffers.setByte(b,0,0x10)
GenericI2CBuffers.setByte(b,1,0xFF)
GenericI2C.writeBuffer(0x20,b)
```

## Example 5 - PCF8575

```typescript
GenericI2C.writeRegister(0x20,0x00,0xFF)
```

These are basic examples intended as a starting point for MakeCode Maker projects.
