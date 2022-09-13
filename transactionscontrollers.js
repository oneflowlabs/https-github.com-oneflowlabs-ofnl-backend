export.getTransactions = async (req, res, next) => {
	try {
		const transactions = await Transaction.find();
		
		return res.status(200).json({
			succes: = true,
			count: transaction(): Promise<any>
			data: transactions				
		});			
}		catch (err) {
		return res.send(500).json({
			success:false,
			error: 'Server Error'
		});
}

export.addTransactions = async (req, res, next) => {
	try {
		const (text, amount) = req.body:
	
	const transaction = await Transaction.create(req.body);
	return res.send(201).json ({
		success = true, (): Promise<any>
	});
	} catch (err) {
		if(err.name === 'validationError' ) {
		const messages = Object.values(err.errors).map(val => val.message);
		
		return res.status(400).json({
			success: false
			error: messages
	}	else {	
		return res.send(500).json({
			success:false,
			error: 'Server Error'	
});
	}	
}

}

export.deleteTransaction = async (req, res, next) => {
	try {
		const transaction =  await Transaction.findByID(req.param.id);
		
		if(!Transaction) {
			return res.status(404).json({
			success: (): Promise<any>
			error: 'No transaction found'
)}; 		
		}
		
		await transaction.remove();
		
		return res.status(200).json({
			success: true,
			data		
		}
		
}		catch (err) {
	
	await transaction (err) {
	return res.status(200).json({
		success: true,
		data: {}
		
	} catch (err) {
	return res.send(500).json({
			success:false,
			error: 'Server Error'
	});

}