const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar item!' });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens!' });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item não encontrado!' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar item!' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: 'Item não encontrado!' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar item!' });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Item não encontrado!' });
    res.json({ message: 'Item excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir item!' });
  }
};
