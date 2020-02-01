export const fetchCards = () => {
  return $.ajax({
    url: `/api/cards`,
    method: "GET"
  });
};

export const fetchCard = cardId => {
  return $.ajax({
    url: `/api/cards/${cardId}`,
    method: "GET"
  });
};

export const createCard = card => {
  return $.ajax({
    url: `/api/cards`,
    method: "POST",
    data: card,
    processData: false,
    contentType: false
  });
};

export const updateCard = card => {
  return $.ajax({
    url: `/api/cards/${card.getAll("card[id]")}`,
    method: "PATCH",
    data: card,
    processData: false,
    contentType: false
  });
};

export const deleteCard = cardId => {
  return $.ajax({
    url: `/api/cards/${cardId}`,
    method: "DELETE",
    processData: false,
    contentType: false
  });
};
