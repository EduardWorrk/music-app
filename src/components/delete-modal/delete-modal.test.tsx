import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteModal } from ".";

describe("DeleteModal Component", () => {
  const props = {
    open: true,
    title: "Удалить элемент",
    description: "Вы уверены, что хотите удалить этот элемент?",
    onClose: jest.fn(),
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    // Очистка мок-функций перед каждым тестом
    props.onClose.mockClear();
    props.onDelete.mockClear();
  });

  it("сравниваем snapshot", () => {
    // Рендерим компонент и получаем фрагмент
    const { container } = render(<DeleteModal {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("проверяем отображается ли заголовок и описание", () => {
    render(<DeleteModal {...props} />);

    // Проверяем, что заголовок отображается корректно
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Проверяем, что описание отображается корректно
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it("Нажимаем на кнопку Да, удалить", () => {
    render(<DeleteModal {...props} />);
    fireEvent.click(screen.getByText("Да, удалить"));

    // Проверяем, что onDelete была вызвана
    expect(props.onDelete).toHaveBeenCalledTimes(1);
  });

  it("Нажимаем на кнопку Отмена", () => {
    render(<DeleteModal {...props} />);

    fireEvent.click(screen.getByText("Отмена"));

    // Проверяем, что onClose была вызвана
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it("Проверяем что модальное окно не отображается", () => {
    const { queryByRole } = render(<DeleteModal {...props} open={false} />);

    // Проверяем, что модальное окно не отображается
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });
});
