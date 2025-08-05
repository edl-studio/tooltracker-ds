import { Routes, Route } from 'react-router-dom';
import { DocsLayout } from '@/components/layout';
import Introduction from '@/pages/docs/Introduction';
import DesignPrinciples from '@/pages/docs/DesignPrinciples';
import Colors from '@/pages/docs/foundations/Colors';
import Typography from '@/pages/docs/foundations/Typography';
import Icons from '@/pages/docs/foundations/Icons';
import Radius from '@/pages/docs/foundations/Radius';
import ToolsPage from '@/pages/Tools';
import { TestTooltip } from '@/components/ui/tooltip/test-tooltip';
import { TestAvatar } from '@/components/ui/avatar/test-avatar';
import { Toaster } from '@/components/ui/toast/toast';

function App() {
  return (
    <>
      <Routes>
        {/* Documentation Routes */}
        <Route path="/docs" element={
          <DocsLayout currentPath="/docs">
            <Introduction />
          </DocsLayout>
        } />
        <Route path="/docs/principles" element={
          <DocsLayout currentPath="/docs/principles">
            <DesignPrinciples />
          </DocsLayout>
        } />
        <Route path="/docs/foundations/colors" element={
          <DocsLayout currentPath="/docs/foundations/colors">
            <Colors />
          </DocsLayout>
        } />
        <Route path="/docs/foundations/typography" element={
          <DocsLayout currentPath="/docs/foundations/typography">
            <Typography />
          </DocsLayout>
        } />
        <Route path="/docs/foundations/icons" element={
          <DocsLayout currentPath="/docs/foundations/icons">
            <Icons />
          </DocsLayout>
        } />
        <Route path="/docs/foundations/radius" element={
          <DocsLayout currentPath="/docs/foundations/radius">
            <Radius />
          </DocsLayout>
        } />
        
        {/* Tools Route */}
        <Route path="/tools" element={<ToolsPage />} />
        
        {/* Test tooltip route */}
        <Route path="/test-tooltip" element={<TestTooltip />} />
        {/* Test avatar route */}
        <Route path="/test-avatar" element={<TestAvatar />} />
        
        {/* Redirect root to docs */}
        <Route path="/" element={
          <DocsLayout currentPath="/docs">
            <Introduction />
          </DocsLayout>
        } />
      </Routes>
      <Toaster />
    </>
  );
}

export default App; 