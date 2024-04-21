import { Input } from '@/components/ui/input';

function Search({
  className,
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className={`${className} md:w-[100px] lg:w-[300px]`}
        {...props}
      />
    </div>
  );
}
Search.defaultProps = {
  className: '',
};

export default Search;
