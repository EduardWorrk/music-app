export const AVATAR_SIZE = { width: 150, height: 150, borderRadius: 2 };

// убрать слэш
export const removeSlash = (str: string): string => {
  return str.slice(1);
};

export const getMinutes = (seconds: number | string): string => {
  if (Number.isNaN(Number(seconds))) {
    return "";
  }

  const sec = +seconds % 60;
  const min = (+seconds / 60) | 0;

  return `${min}:${sec.toString().padStart(2, "0")}`;
};

export const trimText = (name: string, count: number): string => {
  return name.length > count ? `${name.slice(0, count)}...` : name;
};

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;

  return function (...args: Parameters<T>): void {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export const getRandomNumber = (): string => {
  return Math.floor(Math.random() * 10000).toString();
};

export const generatePastelColor = (): string => {
  const r = Math.floor(Math.random() * 56 + 100); // Красный компонент (100-255)
  const g = Math.floor(Math.random() * 56 + 100); // Зеленый компонент (100-255)
  const b = Math.floor(Math.random() * 156 + 100); // Синий компонент (100-255)

  return `rgb(${r},${g},${b})`;
};
