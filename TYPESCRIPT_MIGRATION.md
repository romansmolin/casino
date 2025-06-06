# Strapi v5 & TypeScript Migration Guide

## Migration Summary

This project has been successfully migrated from **Strapi v4.24.0** to **Strapi v5.15.0** with full TypeScript support.

## What Was Changed

### 1. Strapi Version Upgrade
- ✅ Upgraded from Strapi v4.24.0 to v5.15.0
- ✅ Applied automated codemods for breaking changes
- ✅ Updated all core Strapi packages to v5.15.0

### 2. TypeScript Configuration
- ✅ Added TypeScript support with proper configuration files
- ✅ Created root `tsconfig.json` extending Strapi's server configuration
- ✅ Created admin `src/admin/tsconfig.json` for admin panel TypeScript support
- ✅ Enabled TypeScript migrations in database configuration
- ✅ Added TypeScript and @types/node as dev dependencies

### 3. Dependencies Updated
- ✅ Updated React and React DOM to latest compatible versions
- ✅ Updated React Router DOM to v6
- ✅ Updated Styled Components to v6
- ✅ Added react-redux for proper Redux Toolkit compatibility

### 4. Removed Incompatible Plugins
- ❌ Removed `@creazy231/strapi-plugin-apollo-sandbox` (v4 only)
- ❌ Removed `@strapi/plugin-graphql` (v4 version)
- ❌ Removed `@strapi/provider-upload-cloudinary` (v4 version)
- ❌ Removed `strapi-advanced-uuid` (v4 only)
- ❌ Removed `strapi-plugin-multi-select` (v4 only)

## TypeScript Features Available

### 1. Type Checking Scripts
```bash
# Check TypeScript types without emitting files
npm run ts:check

# Watch mode for continuous type checking
npm run ts:check-watch
```

### 2. Configuration Files
- **Root `tsconfig.json`**: Server-side TypeScript configuration
- **`src/admin/tsconfig.json`**: Admin panel TypeScript configuration
- **Database config**: Enabled `useTypescriptMigrations: true`

### 3. File Examples
- `config/server.example.ts`: Example TypeScript configuration file

## Using TypeScript in Your Project

### For New Files
You can now create `.ts` and `.tsx` files anywhere in your project:

**Example Controller (TypeScript):**
```typescript
import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    // Your controller logic here
    return strapi.entityService.findMany('api::your-content-type.your-content-type');
  }
});
```

**Example Service (TypeScript):**
```typescript
import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async customMethod(): Promise<any> {
    // Your service logic here
    return await strapi.db.query('api::your-content-type.your-content-type').findMany();
  }
});
```

### For Configuration Files
You can create TypeScript versions of configuration files using ES modules syntax:

```typescript
// config/database.ts example
export default ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
    },
  },
  settings: {
    useTypescriptMigrations: true
  }
});
```

## Key Migration Notes for Strapi v5

### 1. Entity Service → Document Service
If you have any entity service calls, they should be updated:
```typescript
// Old (v4)
strapi.entityService.findOne('api::article.article', entityId);

// New (v5)
strapi.documents('api::article.article').findOne({ documentId });
```

### 2. Helper Plugin Changes
Most components from `@strapi/helper-plugin` have been moved:
```typescript
// Old (v4)
import { useNotification } from '@strapi/helper-plugin';

// New (v5)
import { useNotification } from '@strapi/strapi/admin';
```

### 3. Admin Panel Components
Admin panel components now come from `@strapi/strapi/admin`:
```typescript
// Old (v4)
import { CheckPagePermissions } from '@strapi/helper-plugin';

// New (v5)
import { Page } from '@strapi/strapi/admin';
const MyComponent = () => (
  <Page.Protect permissions={[{action: 'plugin::my-plugin.read'}]}>
    <MyPage />
  </Page.Protect>
);
```

## Next Steps

1. **Review your existing JavaScript files** for any deprecated API usage
2. **Gradually convert files to TypeScript** as you work on them
3. **Add proper TypeScript types** to your custom controllers, services, and middleware
4. **Test your APIs** to ensure everything works correctly after the migration
5. **Update any custom plugins** to be compatible with Strapi v5

## Available Commands

```bash
# Development
npm run develop

# Production build
npm run build

# Start production server
npm run start

# TypeScript type checking
npm run ts:check
npm run ts:check-watch

# Strapi CLI
npm run strapi
```

## Documentation Links

- [Strapi v5 Migration Guide](https://docs.strapi.io/dev-docs/migration/v4-to-v5/step-by-step)
- [Strapi TypeScript Documentation](https://docs.strapi.io/dev-docs/typescript)
- [Breaking Changes v4 to v5](https://docs.strapi.io/dev-docs/migration/v4-to-v5/breaking-changes) 