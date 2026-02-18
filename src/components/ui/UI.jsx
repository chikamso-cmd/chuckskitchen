export const SectionTitle = ({ title }) => {
  return <h2 className="text-lg font-semibold mt-6 mb-3">{title}</h2>;
}

export const RadioOption = ({ label, price, defaultTag, selected, setSelected }) => {
  return (
    <label className="flex items-center justify-between border border-borderGray rounded-md p-3 mb-3 cursor-pointer hover:border-brand transition">
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="protein"
          checked={selected === label}
          onChange={() => setSelected(label)}
          className="accent-brand w-5 h-5"
        />
        <span>{label}</span>
      </div>
      <span className="text-gray-500 text-sm">{defaultTag || price}</span>
    </label>
  );
}

export const CheckboxOption = ({ label, price, extras, toggleExtra }) => {
  return (
    <label className="flex items-center justify-between border border-borderGray rounded-md p-3 mb-3 cursor-pointer hover:border-brand transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={extras.includes(label)}
          onChange={() => toggleExtra(label)}
          className="accent-brand w-5 h-5"
        />
        <span>{label}</span>
      </div>
      <span className="text-gray-500 text-sm">{price}</span>
    </label>
  );
}
