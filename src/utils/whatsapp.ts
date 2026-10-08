export const whatsappNumbers = ["5541995304757", "5541991031466"];

export const getNextWhatsappNumber = () => {
    const currentIndex = parseInt(localStorage.getItem('whatsappIndex') || '0');
    const newNumber = whatsappNumbers[currentIndex];
    const nextIndex = (currentIndex + 1) % whatsappNumbers.length;
    localStorage.setItem('whatsappIndex', nextIndex.toString());
    return newNumber;
};

export const openWhatsapp = (text?: string) => {
    const number = getNextWhatsappNumber();
    const url = `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
    window.open(url, "_blank");
};
