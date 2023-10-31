describe("Using Matchers", () => {
  test('Common mathcers, Soma', () => {
    expect(11 + 45).toBe(56);
  });

  test ('Object assignment', () => {
    const pessoas = { pessoa1: 'Adam'};
    pessoas['pessoa2'] = 'Racine';
    expect(pessoas).toEqual(
      {pessoa1: 'Adam', pessoa2: 'Racine'}
    );
  });

  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('N mais n', () => {
    const value = 5 + 5;
    expect(value).toBeGreaterThan(9);
    expect(value).toBeGreaterThanOrEqual(9.5);
    expect(value).toBeLessThan(11);
    expect(value).toBeLessThanOrEqual(10.5);
  
    // De ser e é igual são equivalentes quando se trata de números 
    expect(value).toBe(10);
    expect(value).toEqual(10);
  });

  test('Somando floats', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);  Isso dá erro
    expect(value).toBeCloseTo(0.3); // forma correta.
  });

  //Strings
  test('Não tem *EU* em Equipe', () => {
    expect('Equipe').not.toMatch(/eu/);
  });
  
  test('Mas tem cine em Racine', () => {
    expect('Racine').toMatch(/cine/);
  });

  //O /{Text}/i ignora maiúsculas e minúsculas
  test('Ignorando Maiúsculas e Minúsculas', () => {
    expect('Racine').toMatch(/cInE/i);
  });

  test('Tem Uno na lista', () => {
    const bestCars = [
      'Volkswagen GOL',
      'Fiat Uno',
      'Fiat Palio',
      'Chevrolet Corsa',
      'Volkswagen Fusca',
      'Ford Fiesta',
      'Fiat Strada',
      'Chevrolet Celta',
      'Volkswagen Fox',
      'Chevrolet Onix',
    ];
    
    expect(bestCars).toContain('Fiat Uno');
    expect(new Set(bestCars)).toContain('Fiat Uno');
  });
 
  test('compiling android goes as expected', () => {
    const compileAndroidCode = () => {
      throw new Error('you are using the wrong JDK!');
    };
    
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });

  test('Os dados é ovo', () => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));

      const data = {
        name: 'Ovo',
        price: 3.99,
      };
    
      return data;
    }

    return fetchData().then(data => {
      expect(data.name).toBe("Ovo");
    });
  });
}); 
