export const metadata = {
  title: 'OneWoodCraft - Deployment Test',
};

export default function TestPage() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">OneWoodCraft Deployment Test</h1>
      <p className="mb-4">Frontend successfully deployed!</p>
      <p className="text-sm">Environment: {process.env.NODE_ENV}</p>
      <p className="text-sm">API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
} 