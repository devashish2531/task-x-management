import { Facebook, Twitter } from "lucide-react";

export const FooterComponent = () => (
  <>
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-3 text-center md:text-left">
          <h2 className="text-xl font-bold text-white py-6">Task X Manager</h2>
          <p className="text-sm text-gray-300 mt-1">
            © {new Date().getFullYear()} Task X Manager. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1 py-2">
            Your all-in-one task management solution.
          </p>
        </div>

        <div className="col-span-1 text-center md:text-right mt-6 md:mt-0">
          <h4 className="text-gray-300 text-sm font-bold">Follow us:</h4>
          <div className="mt-3 flex justify-center md:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
);
